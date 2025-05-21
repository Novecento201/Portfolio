import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal'; // Assumendo che Modal sia nella stessa cartella
import './newAlert.css';

const NewAlert = () => {
  const [isInitialPosition, setIsInitialPosition] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Move the alert to the top-right corner after 1.5 seconds
    const moveTimer = setTimeout(() => {
      setIsInitialPosition(false);

      // Show the main content with fade-in after the alert moves
      const fadeTimer = setTimeout(() => {
        setShowMainContent(true);
      }, 1000); // Wait 1 second after the alert moves

      return () => clearTimeout(fadeTimer);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(moveTimer);
  }, []);

  // Apply the correct class based on position state
  const alertClass = `new-alert ${
    isInitialPosition ? 'new-alert-initial' : 'new-alert-final'
  }`;

  // Add class to body to control main content visibility
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('main-content');

      if (showMainContent) {
        mainContent.classList.add('visible');
      }
    }

    return () => {
      if (mainContent) {
        mainContent.classList.remove('main-content', 'visible');
      }
    };
  }, [showMainContent]);

  const handleAlertClick = () => {
    setIsModalOpen(true);
    // Se l'alert è ancora in posizione centrale, spostalo subito
    if (isInitialPosition) {
      setIsInitialPosition(false);
    }
  };

  return (
    <>
      <div
        className={alertClass}
        onClick={handleAlertClick}
      >
        <div className="alert-border-animation"></div>
        <span className="new-alert-icon">🔔</span>
        Importante cliccami!
        <span className="new-alert-icon">🔔</span>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            padding: '20px',
            gap: '16px',
          }}
        >
          <h3
            style={{
              color: 'var(--color-primary)',
            }}
          >
            Sei interessato ad offrirmi lavoro?
          </h3>

          <p>Lascio qui questa breve nota</p>

          <p>
            Questo è il primo sito che ho realizzato e non riflette le mie
            attuali abilità (non lo sto tenendo aggiornato)
          </p>

          <p>
            Se vuoi mettermi alla prova scrivimi pure su{' '}
            <a
              href="https://www.linkedin.com/in/marco-lovato-3816a3229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            , sarò felice di provarti cosa so fare con progetti prova!
          </p>

          <p>Ti aspetto in chat, grazie per aver letto 😊</p>
        </div>
      </Modal>
    </>
  );
};

export default NewAlert;
