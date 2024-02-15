

function Resultado({ resultado }) {
  const {
    name,
    login,
    bio,
    html_url,
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    company,
    twitter_username,
    location,
  } = resultado;

  const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);

    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    return fechaNueva.toLocaleDateString("es-ES", opciones);
  };


  return (
    <div className="mt-8">
      <div className="bg-slate-200 dark:bg-slate-700 rounded-xl lg:p-8 p-4">
        <div className="grid font-bold grid-cols-3 gap-4 dark:text-white text-black">
          <img
            className="row-start-1 row-end-4 lg:row-start-1 lg:row-end-3 col-start-1 col-end-3 h-32 w-32 rounded-full"
            src={avatar_url}
            alt="photo user github"
          />

          <div className="lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 lg:row-start-1 lg:row-end-3 row-start-4 row-end-5">
            <div>
              <h2 className="text-3xl mt-3">{name}</h2>
              <p className="text-lg dark:text-blue-500 text-blue-800 mt-3">
                @{login}
              </p>
              <p className="text-lg mt-3">
                {bio === null ? "Este perfil no tiene biografía" : bio}
              </p>
            </div>
          </div>
          <p className="lg:text-end text-start lg:col-start-3 lg:col-end-4 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2">
            Él se unió:{" "}
            <span className="text-gray-200">{formatearFecha(created_at)}</span>
          </p>

          <div className="bg-slate-300 dark:bg-slate-900 p-4 flex items-center justify-between text-base font-bold rounded-lg lg:col-start-2 lg:col-end-4 col-start-1 col-end-4">
            <div className="flex items-center flex-col">
              <svg
                className="h-8 w-8 dark:fill-white fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M13 21v2.5l-3-2l-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035c.163-.023.33-.035.5-.035zM7 5h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"></path>
              </svg>
              <p>{public_repos}</p>
            </div>
            <div className="flex items-center flex-col">
              <svg
                className="h-8 w-8 dark:fill-white fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M208 16A112.127 112.127 0 0 0 96 128v79.681a80.236 80.236 0 0 0 9.768 38.308l27.455 50.333L60.4 343.656A79.725 79.725 0 0 0 24 410.732V496h288v-32H56v-53.268a47.836 47.836 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.146 48.146 0 0 1 128 207.681V128a80 80 0 0 1 160 0v79.681a48.146 48.146 0 0 1-5.861 22.985L240.5 307.007l71.5 46.476v-38.166l-29.223-19l27.455-50.334A80.23 80.23 0 0 0 320 207.681V128A112.127 112.127 0 0 0 208 16m216 384v-64h-32v64h-64v32h64v64h32v-64h64v-32z"></path>
              </svg>
              <p>{followers}</p>
            </div>

            <div className="flex items-center flex-col">
              <svg
                className="h-8 w-8 dark:fill-white fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m5.793 8.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"></path>
              </svg>
              <p>{following}</p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-4 items-center justify-around text-base font-bold rounded-lg lg:col-start-1 lg:col-end-4 col-start-1 col-end-4">
            <div>
              <div className="flex items-center gap-4">
                <svg
                  className="lg:h-8 lg:w-8 h-8 w-8 dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></path>
                </svg>
                <p>{location === null ? "No ubicación" : location}</p>
              </div>

              <a
                href={html_url}
                alt="usuario"
                className="flex items-center gap-4 mt-4"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="lg:h-8 lg:w-8 h-8 w-8 dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17z"></path>
                </svg>
                {html_url}
              </a>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <svg
                  className="lg:h-8 lg:w-8 h-8 w-8 dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path>
                </svg>
                <p>
                  {twitter_username === null ? "Sin redes sociales" : twitter_username}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <svg
                  className="lg:h-8 lg:w-8 h-8 w-8 dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm4 4h-3q-.425 0-.712-.288T17 20q0-.425.288-.712T18 19h3V5h-9v1.4l-2-1.45q0-.8.575-1.375T11.95 3H21q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21M3 21q-.825 0-1.412-.587T1 19v-6.975q0-.5.225-.925t.625-.7l5-3.575Q7.375 6.45 8 6.45t1.15.375l5 3.575q.4.275.625.7t.225.925V19q0 .825-.587 1.413T13 21h-3q-.425 0-.712-.288T9 20v-4H7v4q0 .425-.288.713T6 21zm0-9v7h2v-4q0-.425.288-.712T6 14h4q.425 0 .713.288T11 15v4h2v-7L8 8.45zm8 7v-5H5v5v-5h6z"></path>
                </svg>
                {company === null ? "No compañia" : company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultado;
