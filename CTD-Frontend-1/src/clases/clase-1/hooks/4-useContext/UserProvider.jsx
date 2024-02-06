import { UserContext } from "./UserContext";

//este componente se va a diferenciar de cualquier otro porque va a tener el children
//son básicamente los componentes hijos, no importa CUÁNTOS, los voy a renderizar adentro del Provider

const UserProvider = ({ children }) => {
  const alumna = {
    nombre: "Lia",
    apellido: "castro",
  };

  return (
    //lo que tengo en value, es la información que CUALQUIER componente hijo de este Provider puede obtener
    <UserContext.Provider value={{ hola: "mundo", alumna }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
