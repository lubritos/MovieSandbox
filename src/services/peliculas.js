import axiosPelis from ".";

const peliculas = {
  get: () => axiosPelis.get("sort_by=popularity.desc")
};

export default peliculas;
