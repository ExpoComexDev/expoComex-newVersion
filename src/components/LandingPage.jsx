import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import AboutUsListItems from "./AboutUsListItems";
import ObjectivesListItems from "./ObjectivesListItems";
import CommitmentListItems from "./CommitmentListItems";
import OurImportsListItems from "./OurImportsListItems";
import SmallModal from "./SmallModal";
import ContactForm from "./ContactForm";
import objectivesImg from "../img/objectivesImg.jpg";
import aboutUsImg from "../img/aboutUsImg4.jpg";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
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

  const closeModal = () => {
    setShowModal(false);
    if (modalType === "success") {
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();

    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Este campo es obligatorio";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Este campo es obligatorio";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Este campo es obligatorio";
    }
console.log({newErrors})
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log({errors})

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
  console.log({errors})
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
  };

  return (
    <Container>
      {/* Navigation */}

      <Navbar {...navbarProps} />

      {/* Hero Section */}
      <HeroSection id="inicio">
        <HeroBackground />
        <HeroOverlay />
        <HeroPattern />

        <HeroContent>
          <HeroTitle>
            Empresa Impo/Exportadora
            <HeroSubtitle>Te conectamos con el mundo</HeroSubtitle>
          </HeroTitle>
          <HeroDescription>
            Ofrecemos seguridad y confianza con mas de 10 años de experiencia.
          </HeroDescription>
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
          <SectionSubtitle>
            Somos una organización joven y dinámica, con años de experiencia en
            el rubro. Combinamos la trayectoria de profesionales experimentados
            con la agilidad de una nueva perspectiva.
          </SectionSubtitle>

          <ObjectiveGrid>
            <div>
              <ImagePlaceholder>
                {/* <Ship size={128} color="white" /> */}
                <StyledImage src={aboutUsImg} alt="About us" />
              </ImagePlaceholder>
            </div>

            <FeatureList>
              <AboutUsListItems />
            </FeatureList>
          </ObjectiveGrid>
        </SectionContainer>
      </WhiteSection>

      {/* Nuestros Productos */}
      <GraySection id="clientes">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestros principales productos
          </SectionTitle>
          <SectionSubtitle>
            Presentamos a continuación una selección de las los principales
            productos con los que hemos trabajado de manera exitosa,
            construyendo relaciones sólidas y duraderas a través de un servicio
            de excelencia y resultados comprobados.
          </SectionSubtitle>

          <ProductCard />
        </SectionContainer>
      </GraySection>

      {/* Nuestro Objetivo */}
      <WhiteSection id="objetivo">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestro Objetivo
          </SectionTitle>
          <SectionSubtitle>
            Te ayudamos a importar lo que necesitas. Diseñamos una propuesta
            integral para tu comodidad, encargándonos de todo el proceso de
            punta a punta.
          </SectionSubtitle>

          <ObjectiveGrid>
            <FeatureList>
              <ObjectivesListItems />
            </FeatureList>

            <div>
              <ImagePlaceholder>
                <StyledImage src={objectivesImg} alt="Objetivo" />
              </ImagePlaceholder>
            </div>
          </ObjectiveGrid>
        </SectionContainer>
      </WhiteSection>

      {/* Nuestro Compromiso */}
      <GraySection id="compromiso">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestro Compromiso
          </SectionTitle>
          <SectionSubtitle>
            Nos dedicamos a simplificar la logística global para ti. Gracias a
            una amplia red de transporte aéreo, marítimo y terrestre, diseñamos
            la mejor estrategia de envío, optimizada para tus necesidades y que
            garantiza eficiencia en cada paso.
          </SectionSubtitle>

          <CommitmentListItems />
        </SectionContainer>
      </GraySection>

      {/* Nuestras Importaciones */}
      <WhiteSection id="importaciones">
        <SectionContainer>
          <SectionTitle style={{ color: "#111827" }}>
            Nuestras Importaciones
          </SectionTitle>
          <SectionSubtitle>
            Simplificá tus operaciones con nuestro servicio de importación.
            Contamos con la experiencia necesaria para manejar tus envíos, sean
            por tierra, mar o aire.  Convertite en nuestro aliado estratégico,
            garantizamos un proceso de importación confiable y eficiente.
          </SectionSubtitle>

          <OurImportsListItems />
        </SectionContainer>
      </WhiteSection>

      {/* Contacto */}
      <GradientSection id="contacto">
        <SectionContainer>
          <SectionTitle style={{ color: "white" }}>Contacto</SectionTitle>
          <SectionSubtitle style={{ color: "#bfdbfe" }}>
            <p>
              Para cualquier consulta, pedido de información o solicitud de
              cotización, le pedimos que por favor complete el siguiente
              formulario.
            </p>
            <p>¡Le responderemos tan pronto como nos sea posible!</p>
          </SectionSubtitle>

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
          <FooterText>
            © 2020 ExpoComex SRL. Todos los derechos reservados.
          </FooterText>
          <p style={{ color: "#9ca3af" }}>
            Contacto: <FooterEmail>contacto@expocomexsrl.com</FooterEmail>
          </p>
        </FooterContent>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #312e81 100%);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
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
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: ${pulse} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.span`
  display: block;
  background: linear-gradient(90deg, #60a5fa 0%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2rem;
  padding-top: 1.2rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #bfdbfe;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
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
  font-family: "Poppins", sans-serif;
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
  padding: 5rem 1rem;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`;

const WhiteSection = styled(Section)`
  background: white;
`;

const GraySection = styled(Section)`
  background: #f3f4f6;
`;

const GradientSection = styled(Section)`
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  border-radius: 1rem;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Footer = styled.footer`
  background: #111827;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const FooterText = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
`;

const FooterEmail = styled.span`
  color: #60a5fa;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #93c5fd;
  }
`;

const ObjectiveGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default LandingPage;
