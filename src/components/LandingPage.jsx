import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import AboutUsListItems from "./AboutUsListItems";
import ObjectivesListItems from "./ObjectivesListItems";
import CommitmentListItems from "./CommitmentListItems";
import OurImportsListItems from "./OurImportsListItems";
import BusinessAreasListItems from "./BusinessAreasItems";
import SmallModal from "./SmallModal";
import ContactForm from "./ContactForm";
import objectivesImg from "../img/objectivesImg.webp";
import aboutUsImg from "../img/aboutUsImg4.webp";
import logo from "../img/expocomex-logo.webp";
import { Mail, Linkedin } from 'lucide-react';
import backgroundImg from "../img/test2.webp";
import medal from "../img/medal.webp";
import schlegelLogo from "../img/schlegel-logo.webp";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [isHuman, setIsHuman] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "nosotros",
        "clientes",
        "objetivo",
        "compromiso",
        "importaciones",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleHumanChange = (e) => {
    setIsHuman(e.target.checked);
    setErrors((prev) => ({
      ...prev,
      human: "",
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalType === "success") {
      setFormData({ nombre: "", email: "", mensaje: "" });
      setIsHuman(false);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();

    const newErrors = handleValidations();
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setMessageLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/meolvbry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalType("success");
        setModalMessage(
          "¡Mensaje enviado correctamente! Pronto nos pondremos en contacto contigo."
        );
      } else {
        setModalType("error");
        setModalMessage(
          "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setModalType("error");
      setModalMessage(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setMessageLoading(false);
      setShowModal(true);
    }
  };

  const handleValidations = () => {
    const newErrors = {};
  
    const containsOnlySpecialCharsOrNumbers = (str) => {

      const trimmedStr = str.trim();
      if (trimmedStr === '') return true;
      const hasLetters = /[a-zA-Z]/.test(trimmedStr);
      
      return !hasLetters;
    };
  
    const nombreSinEspacios = formData.nombre.trim();
    if (nombreSinEspacios === '') {
      newErrors.nombre = "Este campo es obligatorio";
    } else if (nombreSinEspacios.length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 letras";
    } else if (containsOnlySpecialCharsOrNumbers(formData.nombre)) {
      newErrors.nombre = "El nombre no puede consistir solo en números o caracteres especiales";
    }
  
    const emailSinEspacios = formData.email.trim();
    if (emailSinEspacios === '') {
      newErrors.email = "Este campo es obligatorio";
    } else if (emailSinEspacios.length < 10) {
      newErrors.email = "El correo debe tener al menos 10 caracteres";
    } else if (!emailSinEspacios.includes("@") || !emailSinEspacios.includes(".")) {
      newErrors.email = "El correo no es válido. Debe incluir '@' y un '.'";
    }
  
    const mensajeSinEspacios = formData.mensaje.trim();
    if (mensajeSinEspacios === '') {
      newErrors.mensaje = "Este campo es obligatorio";
    } else if (mensajeSinEspacios.length < 20) {
      newErrors.mensaje = "El mensaje debe tener al menos 20 caracteres";
    } else if (containsOnlySpecialCharsOrNumbers(formData.mensaje)) {
      newErrors.mensaje = "El mensaje no puede consistir solo en números o caracteres especiales";
    }

    if (!isHuman) {
      newErrors.human = "Debe confirmar que es humano";
    }
  
    return newErrors;
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navbarProps = {
    activeSection: activeSection,
    scrollToSection: scrollToSection,
    isMenuOpen: isMenuOpen,
    setIsMenuOpen: setIsMenuOpen,
  };

  const contactFormProps = {
    formData: formData,
    handleInputChange: handleInputChange,
    handleSubmit: handleSubmit,
    messageLoading: messageLoading,
    errors: errors,
    isHuman: isHuman,
    handleHumanChange: handleHumanChange,
  };

  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Expocomex SRL",
    "alternateName": "ExpoComex",
    "url": "https://expocomexsrl.com",
    "logo": "https://expocomexsrl.com/src/img/expocomex-logo.webp",
    "description": "Especialistas en importación de equipos, maquinarias, repuestos y materias primas. Más de 13 años de experiencia en transporte, minería, petróleo y química.",
    "foundingDate": "2012",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "contacto@expocomexsrl.com",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/expocomex"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Argentina"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "knowsAbout": [
      "Importaciones",
      "Comercio Exterior",
      "Transporte Ferroviario",
      "Minería",
      "Petróleo",
      "Química Industrial"
    ]
  };

  return (
    <Container>
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Navigation */}

      <Navbar {...navbarProps} />

      {/* Hero Section */}
      <HeroSection id="inicio">
        <HeroBackground />
        <HeroOverlay />

        <HeroContent>
          <HeroTitle>
            Importaciones a un click de distancia
            <HeroSubtitle>
            Desde 2012, ofrecemos seguridad y confianza, respaldadas por una sólida experiencia.
            </HeroSubtitle>
          </HeroTitle>
          <HeroDescriptionOne>
            Especializados en la importación de equipos, maquinarias, repuestos, herramientas, insumos, y materias primas;
          </HeroDescriptionOne>
          <HeroDescriptionTwo>
            brindando soluciones integrales a los sectores de transporte, minería, petróleo y química, entre otras.
          </HeroDescriptionTwo>
          <HeroButtons>
            <PrimaryButton onClick={() => scrollToSection("contacto")}>
              Contactanos
            </PrimaryButton>
            {/*             <SecondaryButton onClick={() => scrollToSection('contacto')}>
              Contactanos
            </SecondaryButton> */}
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* Sobre Nosotros */}
      <WhiteSection id="nosotros">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Sobre Nosotros
          </SectionTitle>
          <SectionSubtitleOne>
          Desde 2012, hemos forjado una sólida trayectoria en el rubro de la importación y el comercio exterior. 
          Contamos con un equipo de profesionales altamente especializados, lo que nos permite garantizar la eficiencia, 
          seguridad y confiabilidad en cada una de sus operaciones.
          </SectionSubtitleOne>
          <SectionSubtitleTwo>
            Nuestra amplia experiencia se extiende
            a través de una red global activa que incluye países clave como Argentina, China, Alemania,
            Reino Unido, Italia, Estados Unidos, India, España, y Japón, entre otros. Esta presencia
            internacional y especialización nos permite ofrecer soluciones logísticas robustas y confiables para tu negocio.
          </SectionSubtitleTwo>

          <ObjectiveGrid>
            <div>
              <ImagePlaceholder>
                <StyledImage 
                  src={aboutUsImg} 
                  alt="Equipo profesional de Expocomex SRL especializado en importaciones y comercio exterior" 
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </ImagePlaceholder>
            </div>

            <FeatureList>
              <AboutUsListItems />
            </FeatureList>
          </ObjectiveGrid>
        </SectionContainer>
      </WhiteSection>

      {/* Nuestras Marcas */}
      <GraySection id="clientes">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestras principales Marcas
          </SectionTitle>
          <SectionSubtitleTwo>
            Presentamos a continuación una selección de las principales marcas
            con los que hemos trabajado de manera exitosa, construyendo relaciones sólidas
            y duraderas a través de un servicio de excelencia y resultados comprobados.
          </SectionSubtitleTwo>

          <ProductCard />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <ExclusiveBrandBox>
              <img src={medal} alt="Medalla de representación exclusiva" loading="lazy" width={100} height={100} style={{ width: "100px" }} />
              Somos representantes exclusivos de
              <img src={schlegelLogo} alt="Logo de Schlegel - Marca representada exclusivamente por Expocomex" loading="lazy" width={300} height={120} style={{ height: "120px", width: "300px" }} />
            </ExclusiveBrandBox>
          </div>
        </SectionContainer>
      </GraySection>

      {/* Nuestras Importaciones */}
      <WhiteSection id="importaciones">
        <SectionContainer>
          <SectionMainTitle style={{ color: "#111827" }}>
            Nuestras Importaciones
          </SectionMainTitle>
          <SectionSubtitleOne>
            Simplificá tus operaciones de comercio exterior con nuestro servicio integral de importación.
            Contamos con la experiencia necesaria para gestionar tus envíos de punta a punta, utilizando
            todos los medios necesarios: tierra, mar y aire.
          </SectionSubtitleOne>
          <SectionSubtitleTwo>
            Somos especialistas en manejar cualquier tipo de necesidades
            para industrias de alta demanda garantizando un proceso confiable, eficiente y totalmente adaptado a las
            demandas específicas de cada sector.
          </SectionSubtitleTwo>
          <SectionSubtitle>
            Áreas de Negocio
          </SectionSubtitle>

          <BusinessAreasListItems />

          <SectionSubtitle>
            Medios de Transporte
          </SectionSubtitle>

          <OurImportsListItems />

        </SectionContainer>
      </WhiteSection>

      {/* Nuestro Objetivo */}
      <GraySection id="objetivo">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestro Objetivo
          </SectionTitle>
          <SectionSubtitleTwo>
            Te ayudamos a importar lo que necesitas. Diseñamos una propuesta
            integral para tu comodidad, encargándonos de todo el proceso de
            punta a punta.
          </SectionSubtitleTwo>

          <ObjectiveGrid>
            <FeatureList>
              <ObjectivesListItems />
            </FeatureList>

            <div>
              <ImagePlaceholder>
                <StyledImage 
                  src={objectivesImg} 
                  alt="Nuestro objetivo es facilitar las importaciones con servicios integrales de comercio exterior" 
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </ImagePlaceholder>
            </div>
          </ObjectiveGrid>
        </SectionContainer>
      </GraySection>

      {/* Nuestro Compromiso */}
      <WhiteSection id="compromiso">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestro Compromiso
          </SectionTitle>
          <SectionSubtitleTwo>
            Nos dedicamos a simplificar la logística global para ti. Gracias a
            una amplia red de transporte aéreo, marítimo y terrestre, diseñamos
            la mejor estrategia de envío, optimizada para tus necesidades y que
            garantiza eficiencia en cada paso.
          </SectionSubtitleTwo>

          <CommitmentListItems />
        </SectionContainer>
      </WhiteSection>

      {/* Contacto */}
      <GradientSection id="contacto">
        <SectionContainer>
          <SectionTitle style={{ color: "white" }}>Contacto</SectionTitle>
          <SectionSubtitleTwo style={{ color: "#bfdbfe" }}>
            <p>
              Para cualquier consulta, pedido de información o solicitud de
              cotización, le pedimos que por favor complete el siguiente
              formulario o envie un mail a contacto@expocomexsrl.com.
            </p>
            <p>¡Le responderemos tan pronto como nos sea posible!</p>
          </SectionSubtitleTwo>

          <ContactForm {...contactFormProps} />

        </SectionContainer>
      </GradientSection>

      <SmallModal
        show={showModal}
        onClose={closeModal}
        message={modalMessage}
        type={modalType}
      />

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterLogo>
            <img src={logo} alt="Logo de Expocomex SRL - Especialistas en importaciones y comercio exterior desde 2012" width={50} height={50} style={{ width: "50px", height: "50px" }} />
            <LogoText>Expocomex SRL</LogoText>
          </FooterLogo>
          <FooterText>
            © 2012 Expocomex SRL. Todos los derechos reservados.
          </FooterText>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", zIndex: "1000" }}>
            <div style={{ color: "#9ca3af", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={16} color="#9ca3af" /> <FooterEmail>contacto@expocomexsrl.com</FooterEmail>
            </div>
            <div style={{ color: "#9ca3af", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Linkedin size={16} color="#9ca3af" /> <FooterSocials href="https://www.linkedin.com/company/expocomex" target="_blank">linkedin.com/company/expocomex</FooterSocials>
            </div>
          </div>
        </FooterContent>
        <HeroPattern />
      </Footer>
    </Container>
  );
};

// Keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${backgroundImg}); 
  background-size: cover;
  background-position: center; 
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #312e81 100%);
  opacity: 0.85;
`;

const HeroPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  animation: ${fadeInUp} 1s ease-out;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 639px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
    max-width: 1200px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.3rem;
  margin-top: 5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: ${pulse} 3s ease-in-out infinite;

  @media (min-width: 945px) {
    font-size: 3.6rem;
      margin-top: 7rem;
  }

  @media (min-width: 1245px) {
    font-size: 3.8rem;
    margin-top: 8rem;
  }
`;

const HeroSubtitle = styled.span`
  display: block;
  background: linear-gradient(90deg, #60a5fa 0%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 1.6rem;
  line-height: 1.4;
  padding-top: 1.2rem;

    @media (min-width: 1245px) {
    font-size: 2rem;
  }
`;

const HeroDescriptionOne = styled.div`
  font-size: 1.2rem;
  color: #bfdbfe;

  @media (min-width: 1245px) {
    font-size: 1.3rem;
  }
`;

const HeroDescriptionTwo = styled.div`
  font-size: 1.2rem;
  color: #bfdbfe;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (min-width: 1245px) {
    font-size: 1.3rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-top: 1.8rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(90deg, #2563eb 0%, #0891b2 100%);
  color: white;
  font-size: 1rem;
  padding: 1rem 3rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #0e7490 100%);
    transform: scale(1.1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

/* const SecondaryButton = styled.button`
  border: 2px solid white;
  color: white;
  background: transparent;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #1e3a8a;
  }
`; */

const Section = styled.section`
  padding: 5rem 1.5rem 5rem 1.5rem;

  @media (min-width: 640px) {
    padding: 3rem 2.5rem 3rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 2rem 6rem 2rem;
  }
`;

const ContactSection = styled.section`
  padding: 5rem 2rem;

  @media (min-width: 640px) {
    padding: 3rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 5.5rem 2rem;
  }
`;

const WhiteSection = styled(Section)`
  background: white;
`;

const GraySection = styled(Section)`
  background: #f3f4f6;
`;

const GradientSection = styled(ContactSection)`
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0px auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }

  @media (min-width: 1245px) {
    font-size: 3rem;
  }
`;

const SectionMainTitle = styled.h1`
  font-size: 2.51rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1245px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled.h1`
  font-size: 1.8rem;
  color: #6b7280;
    text-align: center;
  margin-bottom: 4rem;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;

        @media (min-width: 1245px) {
      font-size: 2rem;
    }
`;

const SectionSubtitleOne = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionSubtitleTwo = styled.div`
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 770px;
  margin-left: auto;
  margin-right: auto;
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  @media (min-width: 640px) {
    height: 30rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain; 

  @media (min-width: 640px) {
    object-fit: cover;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Footer = styled.footer`
  background: linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(21, 21, 21) 100%);
  color: white;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 770px) {
      background: linear-gradient(to bottom,rgb(0, 0, 0) 0%,rgb(12, 12, 12) 100%);
  }
`;

const ExclusiveBrandBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 6rem;
  color: rgb(55, 65, 81);
  font-size: 1.8rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
  
  background: rgba(220, 252, 231, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 40px rgba(16, 185, 129, 0.15),
      0 0 0 1px rgba(16, 185, 129, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
    background: rgba(209, 250, 229, 0.7);
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 1245px) {
    padding: 1.5rem 2rem;
    font-size: 1.3rem;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: default;
  color:#e2e2e2;
  padding-left: 1rem;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    padding: 0 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const FooterText = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
  cursor: default;
`;

const FooterEmail = styled.span`
  color:#efefef;
  cursor: default;
`;

const FooterSocials = styled.a`
  color:#efefef;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #9ca3af;
  }
`;

const ObjectiveGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default LandingPage;
