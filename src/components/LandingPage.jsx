import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Mail, Phone, MapPin, Send, Globe, Ship, Users, Target, Heart, Package, CheckCircle, Star, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'clientes', 'objetivo', 'compromiso', 'importaciones', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      {/* Navigation */}
      <Nav>
        <NavContainer>
          <NavContent>
            <Logo>
              <Globe style={{height: '2rem', width: '2rem', color: '#2563eb'}} />
              <LogoText>ExoComex SRL</LogoText>
            </Logo>
            
            {/* Desktop Menu */}
            <NavLinks>
              <NavLink 
                onClick={() => scrollToSection('inicio')} 
                active={activeSection === 'inicio'}
              >
                Inicio
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('nosotros')} 
                active={activeSection === 'nosotros'}
              >
                Nosotros
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('clientes')} 
                active={activeSection === 'clientes'}
              >
                Marcas
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('objetivo')} 
                active={activeSection === 'objetivo'}
              >
                Objetivo
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('compromiso')} 
                active={activeSection === 'compromiso'}
              >
                Compromiso
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('importaciones')} 
                active={activeSection === 'importaciones'}
              >
                Importaciones
              </NavLink>
              <NavLink 
                onClick={() => scrollToSection('contacto')} 
                active={activeSection === 'contacto'}
              >
                Contacto
              </NavLink>
            </NavLinks>

            {/* Mobile Menu Button */}
            <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>
          </NavContent>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <MobileMenu>
              <MobileMenuContent>
                <MobileMenuLink 
                  onClick={() => scrollToSection('inicio')} 
                  active={activeSection === 'inicio'}
                >
                  Inicio
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('nosotros')} 
                  active={activeSection === 'nosotros'}
                >
                  Sobre Nosotros
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('clientes')} 
                  active={activeSection === 'clientes'}
                >
                  Clientes
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('objetivo')} 
                  active={activeSection === 'objetivo'}
                >
                  Objetivo
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('compromiso')} 
                  active={activeSection === 'compromiso'}
                >
                  Compromiso
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('importaciones')} 
                  active={activeSection === 'importaciones'}
                >
                  Importaciones
                </MobileMenuLink>
                <MobileMenuLink 
                  onClick={() => scrollToSection('contacto')} 
                  active={activeSection === 'contacto'}
                >
                  Contacto
                </MobileMenuLink>
              </MobileMenuContent>
            </MobileMenu>
          )}
        </NavContainer>
      </Nav>

      {/* Hero Section */}
      <HeroSection id="inicio">
        <HeroBackground />
        <HeroOverlay />
        <HeroPattern />
        
        <HeroContent>
          <HeroTitle>
            Empresa Impo/Exportadora
            <HeroSubtitle>
            Te conectamos con el mundo
            </HeroSubtitle>
          </HeroTitle>
          <HeroDescription>
          Ofrecemos seguridad y confianza con mas de 10 años de experiencia.
          </HeroDescription>
          <HeroButtons>
            <PrimaryButton onClick={() => scrollToSection('contacto')}>
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
          <SectionTitle style={{color: '#111827'}}>Sobre Nosotros</SectionTitle>
          <SectionSubtitle>
          Somos una organización joven y dinámica, con años de experiencia en el rubro. Combinamos la trayectoria de profesionales experimentados con la agilidad de una nueva perspectiva.
          </SectionSubtitle>
          
          <ObjectiveGrid>
            <div>
              <ImagePlaceholder>
                <Ship size={128} color="white" />
              </ImagePlaceholder>
            </div>
            <FeatureList>
              <FeatureItem>
                <CheckCircle size={24} color="#10b981" style={{marginTop: '0.25rem', flexShrink: 0}} />
                <FeatureContent>
                  <h3>Experiencia Global</h3>
                  <p>Planificamos la mejor estrategia para que importes tus mercaderías desde cualquier parte del mundo. Nuestra experiencia nos permite garantizar un proceso eficiente y seguro en cada operación.</p>
                </FeatureContent>
              </FeatureItem>
              <FeatureItem>
                <CheckCircle size={24} color="#10b981" style={{marginTop: '0.25rem', flexShrink: 0}} />
                <FeatureContent>
                  <h3>Soluciones Integrales</h3>
                  <p>Diseñamos soluciones completas que simplifican tus operaciones, desde la logística hasta la optimización de costos. Con nuestras estrategias, te enfocas en el crecimiento de tu negocio.</p>
                </FeatureContent>
              </FeatureItem>
              <FeatureItem>
                <CheckCircle size={24} color="#10b981" style={{marginTop: '0.25rem', flexShrink: 0}} />
                <FeatureContent>
                  <h3>Compromiso Total</h3>
                  <p>Nuestro compromiso es asegurar un proceso fluido y transparente de principio a fin. Trabajamos incansablemente para superar tus expectativas y construir una alianza de confianza para tu éxito.</p>
                </FeatureContent>
              </FeatureItem>
            </FeatureList>
          </ObjectiveGrid>
        </SectionContainer>
      </WhiteSection>

      {/* Nuestros Clientes */}
      <GraySection id="clientes"> 
        <SectionContainer>
          <SectionTitle style={{color: '#111827'}}>Nuestras marcas principales</SectionTitle>
          <SectionSubtitle>
          Presentamos a continuación una selección de las principales marcas con las que hemos colaborado de manera exitosa, construyendo relaciones sólidas y duraderas a través de un servicio de excelencia y resultados comprobados.
          </SectionSubtitle>
          
          <Grid cols="3">
            <Card>
              <CardContent>
                <Users size={48} color="#2563eb" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>Empresas Multinacionales</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardDescription>
{/*                 <StarRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </StarRating> */}
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <Package size={48} color="#059669" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>PyMEs</CardTitle>
                <CardDescription>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardDescription>
{/*                 <StarRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </StarRating> */}
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <Globe size={48} color="#7c3aed" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>Importadores</CardTitle>
                <CardDescription>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardDescription>
{/*                 <StarRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </StarRating> */}
              </CardContent>
            </Card>
          </Grid>
        </SectionContainer>
      </GraySection>

      {/* Nuestro Objetivo */}
      <WhiteSection id="objetivo">
        <SectionContainer>
          <SectionTitle style={{color: '#111827'}}>Nuestro Objetivo</SectionTitle>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionSubtitle>
          
          <ObjectiveGrid>
            <FeatureList>
              <ObjectiveFeature>
                <Target size={48} color="#2563eb" />
                <div>
                  <h3>Misión</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </ObjectiveFeature>
              
              <ObjectiveFeature>
                <Globe size={48} color="#059669" />
                <div>
                  <h3>Visión</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </ObjectiveFeature>
              
              <ObjectiveFeature>
                <Heart size={48} color="#dc2626" />
                <div>
                  <h3>Valores</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </ObjectiveFeature>
            </FeatureList>
            
            <div>
              <ImagePlaceholder style={{background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'}}>
                <Target size={128} color="white" />
              </ImagePlaceholder>
            </div>
          </ObjectiveGrid>
        </SectionContainer>
      </WhiteSection>

      {/* Nuestro Compromiso */}
      <GraySection id="compromiso">
        <SectionContainer>
          <SectionTitle style={{color: '#111827'}}>Nuestro Compromiso</SectionTitle>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionSubtitle>
          
          <Grid cols="4">
            <CommitmentItem>
              <CommitmentIcon bgColor="#2563eb">
                <CheckCircle size={40} color="white" />
              </CommitmentIcon>
              <CommitmentTitle>Calidad</CommitmentTitle>
              <CommitmentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CommitmentDescription>
            </CommitmentItem>
            
            <CommitmentItem>
              <CommitmentIcon bgColor="#059669">
                <Users size={40} color="white" />
              </CommitmentIcon>
              <CommitmentTitle>Servicio</CommitmentTitle>
              <CommitmentDescription>Ut enim ad minim veniam, quis nostrud exercitation.</CommitmentDescription>
            </CommitmentItem>
            
            <CommitmentItem>
              <CommitmentIcon bgColor="#7c3aed">
                <Globe size={40} color="white" />
              </CommitmentIcon>
              <CommitmentTitle>Innovación</CommitmentTitle>
              <CommitmentDescription>Duis aute irure dolor in reprehenderit in voluptate.</CommitmentDescription>
            </CommitmentItem>
            
            <CommitmentItem>
              <CommitmentIcon bgColor="#dc2626">
                <Heart size={40} color="white" />
              </CommitmentIcon>
              <CommitmentTitle>Confianza</CommitmentTitle>
              <CommitmentDescription>Excepteur sint occaecat cupidatat non proident.</CommitmentDescription>
            </CommitmentItem>
          </Grid>
        </SectionContainer>
      </GraySection>

      {/* Nuestras Importaciones */}
      <WhiteSection id="importaciones">
        <SectionContainer>
          <SectionTitle style={{color: '#111827'}}>Nuestras Importaciones</SectionTitle>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionSubtitle>
          
          <Grid cols="3">
            <Card>
              <CardContent>
                <Package size={48} color="#ea580c" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>Productos Electrónicos</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <Ship size={48} color="#2563eb" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>Maquinaria Industrial</CardTitle>
                <CardDescription>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <Globe size={48} color="#059669" style={{marginBottom: '1.5rem'}} />
                <CardTitle style={{color: '#111827'}}>Materias Primas</CardTitle>
                <CardDescription>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardDescription>
              </CardContent>
            </Card>
          </Grid>
        </SectionContainer>
      </WhiteSection>

      {/* Contacto */}
      <GradientSection id="contacto">
        <SectionContainer>
          <SectionTitle style={{color: 'white'}}>Contacto</SectionTitle>
          <SectionSubtitle style={{color: '#bfdbfe'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionSubtitle>
          
          <FormContainer>
            <FormGroup>
              <Label htmlFor="nombre">
                Nombre <span style={{color: '#df382c', fontWeight: 'bold'}}>*</span>
              </Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                placeholder="Ingresá tu nombre"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">
                Email <span style={{color: '#df382c', fontWeight: 'bold'}}>*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="mensaje">
                Mensaje <span style={{color: '#df382c', fontWeight: 'bold'}}>*</span>
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                placeholder="Escribí tu mensaje aquí..."
              />
            </FormGroup>
            
            <SubmitButton type="button" onClick={handleSubmit}>
              <Send size={20} />
              <span>Enviar Mensaje</span>
            </SubmitButton>
          </FormContainer>
        </SectionContainer>
      </GradientSection>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterText>
            © 2020 ExpoComex SRL. Todos los derechos reservados.
          </FooterText>
          <p style={{color: '#9ca3af'}}>
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

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
`;

const NavLinks = styled.div`
  display: none;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavLink = styled.span`
  color: #374151;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2563eb;
    transform: scale(1.05);
  }
  
  ${props => props.active && `
    color: #2563eb;
    font-weight: 600;
    background-color: #eff6ff;
  `}
`;

const MobileMenuButton = styled.button`
  display: block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e5e7eb;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileMenuLink = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2563eb;
    background-color: #f9fafb;
  }
  
  ${props => props.active && `
    color: #2563eb;
    font-weight: 600;
  `}
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
    font-size: 2.5rem;
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
  font-family: 'Poppins', sans-serif;
  padding: 1rem 3rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #0e7490 100%);
    transform: scale(1.10);
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

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => 
      props.cols === '2' ? 'repeat(2, 1fr)' : 
      props.cols === '3' ? 'repeat(3, 1fr)' : 
      props.cols === '4' ? 'repeat(4, 1fr)' : '1fr'};
  }
  
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    transform: translateY(-8px);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  border-radius: 1rem;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #6b7280;
    line-height: 1.6;
  }
`;

const CommitmentItem = styled.div`
  text-align: center;
`;

const CommitmentIcon = styled.div`
  background: ${props => props.bgColor || '#2563eb'};
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const CommitmentTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const CommitmentDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  max-width: 520px;
  margin: 0 auto;
  box-sizing: border-box; 
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #374151;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box; 
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  height: 8rem;
  resize: none;
  font-family: inherit;
  box-sizing: border-box; 
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #0891b2 100%);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  
  &:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #0e7490 100%);
    transform: scale(1.05);
  }
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

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
`;

const ObjectiveGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ObjectiveFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #6b7280;
    line-height: 1.6;
  }
`;

export default LandingPage;