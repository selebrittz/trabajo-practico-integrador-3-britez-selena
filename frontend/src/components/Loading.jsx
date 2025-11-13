export const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-danger mb-3" role="status"></div>
        <p className="fw-bold text-secondary">{message}</p>
      </div>
    </div>
  );
};
