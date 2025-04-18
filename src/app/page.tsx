'use client'

// Modular components for Coffely landing page
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div style={{backgroundColor: '#ffebbc', minHeight: '100vh', width: '100%', overflow: 'hidden'}}>
      {/* Hero Section */}
      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '40px 15px 60px', textAlign: 'center'}}>
        <h1 style={{
          fontSize: 'clamp(42px, 8vw, 90px)', 
          fontWeight: 'bold', 
          color: '#292524', 
          marginBottom: '12px'
        }}>
          Coffely
        </h1>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 50px)', 
          color: '#292524', 
          marginBottom: '40px'
        }}>
          Deine Kaffee-Reise beginnt hier
        </h2>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <img 
            src="/images/Leo mit Kaffeetasse & Smartphone.png" 
            alt="Leo Maskottchen mit Kaffeetasse und Smartphone" 
            style={{
              width: '100%', 
              maxWidth: '620px', 
              height: 'auto', 
              margin: '0 auto'
            }}
          />
        </div>
      </div>

      {/* Spacing Element */}
      <div style={{height: 'clamp(40px, 5vw, 80px)'}}></div>

      {/* Tracking Section */}
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '40px 20px'}}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Text Column */}
          <div style={{flex: '1', paddingLeft: '10px', maxWidth: '500px', textAlign: 'center'}}>
            <h2 style={{
              fontSize: 'clamp(32px, 6vw, 60px)', 
              fontWeight: 'bold', 
              color: '#292524', 
              marginBottom: '15px'
            }}>
              Verfolge deine Koffeinaufnahme
            </h2>
            <p style={{
              fontSize: 'clamp(22px, 4.5vw, 45px)', 
              color: '#292524', 
              lineHeight: '1.4'
            }}>
              Behalte deinen aktuellen Koffein-konsum im Blick.
            </p>
          </div>
          
          {/* Image Column */}
          <div style={{flex: '1', display: 'flex', justifyContent: 'center'}}>
            <img 
              src="/images/Leo erkärt App.png" 
              alt="Leo Maskottchen erklärt die Koffein-Tracking Funktion" 
              style={{
                width: '100%',
                maxWidth: '800px', 
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>

      {/* Spacing Element */}
      <div style={{height: 'clamp(50px, 7vw, 100px)'}}></div>

      {/* Partner Section mit Cafe-Hintergrund - VERBESSERT */}
      <div style={{
        position: 'relative',
        padding: 'clamp(60px, 8vw, 100px) 20px',
        margin: '0',
        width: '100%',
        marginTop: '40px'
      }}>
        {/* Hintergrundbild als absolut positioniertes Element */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/images/Background Cafe.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25,  /* Niedrige Deckkraft für den Hintergrund */
          zIndex: 0
        }}></div>
        
        {/* Inhalt über dem Hintergrund */}
        <div style={{
          maxWidth: '900px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Text Column */}
            <div style={{flex: '1', paddingLeft: '10px', maxWidth: '500px', textAlign: 'center'}}>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 50px)', 
                fontWeight: 'bold', 
                color: '#292524', 
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Mehr Gäste.<br />
                Mehr Bindung.<br />
                Kein Aufwand.
              </h2>
              
              <p style={{
                fontSize: 'clamp(18px, 3vw, 30px)', 
                color: '#292524', 
                lineHeight: '1.5',
                marginBottom: '30px',
                maxWidth: '550px'
              }}>
                Mit Coffely werden Sie Teil einer Community von Kaffeeliebhabern - und Ihre Gäste kommen öfter zurück.
              </p>
              
              <button style={{
                backgroundColor: '#B45309',
                color: 'white',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer'
              }}>
                Jetzt Partner werden
              </button>
            </div>
            
            {/* Image Column */}
            <div style={{flex: '1', display: 'flex', justifyContent: 'center'}}>
              <img 
                src="/images/Leo Partner.png" 
                alt="Leo Maskottchen mit Gründer" 
                style={{
                  width: '100%',
                  maxWidth: '480px', 
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Element */}
      <div style={{height: 'clamp(60px, 10vw, 120px)'}}></div>

      {/* Team Section - Die Gründer */}
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 20px 40px'}}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 50px)',
          fontWeight: 'bold',
          color: '#292524',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Das Team hinter Coffely
        </h2>

        {/* Founder Image */}
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <img 
            src="/images/Leo mit Founder.jpg" 
            alt="Die Gründer mit Leo-Maskottchen" 
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(139, 69, 19, 0.2)'
            }}
          />
        </div>

        {/* Founder Descriptions */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-8">
          {/* Deyar */}
          <div style={{flex: '1', textAlign: 'center'}}>
            <h3 style={{
              fontSize: 'clamp(24px, 3.4vw, 34px)',
              fontWeight: 'bold',
              color: '#292524',
              marginBottom: '15px'
            }}>
              Deyar Zakir
            </h3>
            <p style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              color: '#292524',
              marginBottom: '10px',
              fontStyle: 'italic'
            }}>
              Technischer Visionär
            </p>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#292524',
              lineHeight: '1.6'
            }}>
              Mit seiner Leidenschaft für innovative Technologien treibt Deyar die digitale Entwicklung von Coffely voran. Als Tech-Enthusiast und Kaffeeliebhaber verbindet er präzises Engineering mit der Wärme einer perfekten Tasse Kaffee.
            </p>
          </div>

          {/* Manuel */}
          <div style={{flex: '1', textAlign: 'center'}}>
            <h3 style={{
              fontSize: 'clamp(24px, 3.4vw, 34px)',
              fontWeight: 'bold',
              color: '#292524',
              marginBottom: '15px'
            }}>
              Manuel Worlitzer
            </h3>
            <p style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              color: '#292524',
              marginBottom: '10px',
              fontStyle: 'italic'
            }}>
              Kreativer Stratege
            </p>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#292524',
              lineHeight: '1.6'
            }}>
              Manuel bringt die Kaffeewelt und digitale Innovation zusammen. Seine tiefe Verbundenheit zur Café-Kultur und sein unternehmerischer Instinkt formen die Vision von Coffely: Eine Gemeinschaft zu schaffen, die lokale Cafés und Kaffeeliebhaber vereint.
            </p>
          </div>
        </div>

        <p style={{
          fontSize: 'clamp(18px, 2.4vw, 24px)',
          color: '#292524',
          textAlign: 'center',
          marginTop: '40px',
          fontWeight: '500'
        }}>
          "Wir glauben, dass jede Tasse Kaffee eine Geschichte erzählt und jedes Café ein Ort der Gemeinschaft ist."
        </p>
      </div>

      {/* Spacing Element */}
      <div style={{height: '40px'}}></div>

      {/* Kontaktformular Section */}
      <div style={{
        backgroundColor: 'rgba(180, 83, 9, 0.1)',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        marginBottom: '60px'
      }}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(30px, 4.5vw, 45px)',
            fontWeight: 'bold',
            color: '#292524',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Kontaktiere uns
          </h2>
          
          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 22px)',
            color: '#292524',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.5'
          }}>
            Hast du Fragen zu Coffely? Möchtest du Partner werden oder uns Feedback geben? 
            Wir freuen uns von dir zu hören!
          </p>

          <ContactForm />
        </div>
      </div>

      {/* Abschluss-Section / Footer */}
      <div style={{
        backgroundColor: '#8B4513',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(32px, 5.5vw, 55px)',
            fontWeight: 'bold',
            marginBottom: '30px'
          }}>
            Starte deine Kaffee-Reise
          </h2>
          
          <p style={{
            fontSize: 'clamp(18px, 3vw, 30px)',
            lineHeight: '1.5',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Lade die App herunter und erhalte deine ersten digitalen Kaffeestempel
          </p>
          
          {/* App Store Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-[60px]">
            <a href="#" style={{height: '60px'}}>
              <img 
                src="/images/app-store-badge.svg" 
                alt="Download on the App Store" 
                style={{height: '100%'}}
              />
            </a>
            <a href="#" style={{height: '60px'}}>
              <img 
                src="/images/google-play-badge.svg" 
                alt="Get it on Google Play" 
                style={{height: '100%'}}
              />
            </a>
          </div>
          
          {/* Kontaktinformationen */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <p style={{fontSize: 'clamp(18px, 2.2vw, 22px)', marginBottom: '10px'}}>Kontakt: info@coffely.app</p>
            <div className="flex flex-wrap justify-center gap-5 mt-5">
              <a href="#" style={{color: 'white', textDecoration: 'none'}}>Impressum</a>
              <a href="#" style={{color: 'white', textDecoration: 'none'}}>Datenschutz</a>
              <a href="#" style={{color: 'white', textDecoration: 'none'}}>AGB</a>
            </div>
            <p style={{marginTop: '30px', fontSize: 'clamp(14px, 1.8vw, 18px)'}}>© 2023 Coffely. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
