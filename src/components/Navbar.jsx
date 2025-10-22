import React from 'react'
import { Globe,Menu,X } from "lucide-react";
import styled from "styled-components";

const Navbar = ({
    activeSection = "",
    isMenuOpen = false,
    setIsMenuOpen = () => {},
    scrollToSection = () => {},
}) => {
  return (
    <>
    <Nav>
        <NavContainer>
          <NavContent>
            <Logo>
              <Globe
                style={{ height: "3rem", width: "3rem", color: "#2563eb" }}
              />
              <LogoText>ExpoComex SRL</LogoText>
            </Logo>

            {/* Desktop Menu */}
            <NavLinks>
              <NavLink
                onClick={() => scrollToSection("inicio")}
                active={activeSection === "inicio"}
              >
                Inicio
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("nosotros")}
                active={activeSection === "nosotros"}
              >
                Nosotros
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("clientes")}
                active={activeSection === "clientes"}
              >
                Marcas
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("importaciones")}
                active={activeSection === "importaciones"}
              >
                Importaciones
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("objetivo")}
                active={activeSection === "objetivo"}
              >
                Objetivo
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("compromiso")}
                active={activeSection === "compromiso"}
              >
                Compromiso
              </NavLink>
              <NavLink
                onClick={() => scrollToSection("contacto")}
                active={activeSection === "contacto"}
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
                  onClick={() => scrollToSection("inicio")}
                  active={activeSection === "inicio"}
                >
                  Inicio
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("nosotros")}
                  active={activeSection === "nosotros"}
                >
                  Sobre Nosotros
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("clientes")}
                  active={activeSection === "clientes"}
                >
                  Marcas
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("importaciones")}
                  active={activeSection === "importaciones"}
                >
                  Importaciones
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("objetivo")}
                  active={activeSection === "objetivo"}
                >
                  Objetivo
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("compromiso")}
                  active={activeSection === "compromiso"}
                >
                  Compromiso
                </MobileMenuLink>
                <MobileMenuLink
                  onClick={() => scrollToSection("contacto")}
                  active={activeSection === "contacto"}
                >
                  Contacto
                </MobileMenuLink>
              </MobileMenuContent>
            </MobileMenu>
          )}
        </NavContainer>
      </Nav>
    </>
  )
}

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
  height: 6rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: default;
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
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #2563eb;
    transform: scale(1.05);
  }

  ${(props) =>
    props.active &&
    `
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

  ${(props) =>
    props.active &&
    `
    color: #2563eb;
    font-weight: 600;
  `}
`;

export default Navbar