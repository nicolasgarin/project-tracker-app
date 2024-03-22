import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import rocket from "../../assets/medals/rocket-medal.svg";
import star from "../../assets/medals/star-medal.svg";
import cup from "../../assets/medals/cup-medal.svg";
import ray from "../../assets/medals/ray-medal.svg";
import crown from "../../assets/medals/crown-medal.svg";
import plus from "../../assets/medals/plus-medal.svg";

function ModalNuevoLogro({ dispatch }) {
  const [show, setShow] = useState(false);
  const [nombreLogro, setNombreLogro] = useState("");
  const [imgSelected, setImgSelected] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function crearLogro(e) {
    e.preventDefault()
    setShow(false);
  }

  return (
    <>
      <div className="medal-box plus d-flex flex-column align-items-center col-4" onClick={handleShow}>
          <img src={plus} className="medal" alt="project tracker logo" />
          <div className="medal-name texto-imp text-center">
            NUEVO LOGRO
          </div>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo logro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="sec-nombre d-flex">
              <label className="label" htmlFor="nombreNuevoLogro">
                Nombre
              </label>
              <input type="text" id="nombreNuevoLogro" onChange={e => setNombreLogro(e.target.value)} required />
            </div>
            <div className="sec-img row">
              <div className="col-4 img-op" key="radio-rocket">
              <input type="radio" id="rocket" value="rocket" onChange={e => setImgSelected(e.target.value)} required />
                <label htmlFor="rocket">
                  <img src={rocket} className="medal" />
                </label>
              </div>
              <div className="col-4 img-op" key="radio-star">
              <input type="radio" id="star" value="star" onChange={e => setImgSelected(e.target.value)} />
                <label htmlFor="star">
                  <img src={star} className="medal" />
                </label>
              </div>
              <div className="col-4 img-op" key="radio-cup">
              <input type="radio" id="cup" value="cup" onChange={e => setImgSelected(e.target.value)} />
                <label htmlFor="cup">
                  <img src={cup} className="medal" />
                </label>
              </div>
              <div className="col-4 img-op" key="radio-ray" >
              <input type="radio" id="ray" value="ray" onChange={e => setImgSelected(e.target.value)} />
                <label htmlFor="ray">
                  <img src={ray} className="medal" />
                </label>
              </div>
              <div className="col-4 img-op" key="radio-crown">
              <input type="radio" id="crown" value="crown" onChange={e => setImgSelected(e.target.value)} />

                <label htmlFor="crown">
                  <img src={crown} className="medal" />
                </label>
              </div>
              <input className="btn btn-celeste" onClick={crearLogro} type="submit" value="Crear" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-celeste" onClick={crearLogro}>
            Crear
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNuevoLogro;
