import React from "react";
import "./New.scss";
import { Accordion } from "react-bootstrap";

export const NewVersion = () => {
  return (
    <div className="accordion__wrap">
      <h2>News!</h2>
      <small>
        Raga non so come si numerano le versioni. Se il numero sale vuol dire che sta andando tutto
        bene.
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
      </Accordion>
    </div>
  );
};
