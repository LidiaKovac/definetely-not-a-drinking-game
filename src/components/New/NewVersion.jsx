import React from "react";
import "./New.scss";
import { Accordion } from "react-bootstrap";

export const NewVersion = () => {
  return (
    <div className="accordion__wrap">
      <h2>News e memini!</h2>
      <small>
        Raga non so come si numerano le versioni. Se il numero sale vuol dire che sta andando tutto
        bene. <br/>
        Sappiate che questa sezione e' incredibilmente ostile. Senza motivo, mi sento acida stasera.
      </small>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Versione 0.2</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Eliminato le domande di merda, <i>forse.</i>
              </li>
              <li>Aggiunto localStorage per una UX a prova di Vee ubriaca.</li>
              <li>
                Ho aggiustato i toggle, ora funzionano anche se avete il parkinson come Fabri.
              </li>
              <li>
                Per la gioia di Mauro, ora potete cambiare domanda anche cliccando sulla domanda
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Ringraziamenti e note</Accordion.Header>
          <Accordion.Body className='accordion-ringraziamenti'>
            <small>Si, come nella tesi. Tanto se continuo a sviluppare stronzate invece che studiare non mi laureo mica.</small>
            <ul>
              <li>
                Vee, Mai e Carlotta: domande incredibilmente imbarazzanti e rovina-relazioni
              </li>
              <li>
                Jack: continua a cercare di rompere le mie app, magari un giorno ce la fai, coglione.
              </li>
              <li>
                Fabri: il tuo parkinson mi ha permesso di scoprire un bug. 
              </li>
              <li>
                Riky: Hai pensato che avrei creato un backend per questa cosa. Un backend con Docker. Confidence boost fondamentale.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
