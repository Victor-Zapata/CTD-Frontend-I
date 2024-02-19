import React from "react";
import PropTypes from "prop-types";

const TiposDeProps = ({ title, subtitle, year, edad }) => {

  //   if (!title) {
  //     throw new Error ('El título no existe')
  //   }

  return (
    <div>
      <h2 style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        PropTypes...Título enviado:{" "}
        <span style={{ color: "blue" }}>{title}</span>
        <span style={{ color: "orange" }}>{subtitle}</span>
        <p>{ year }</p>
        <p>{ edad }</p>
      </h2>
    </div>
  );
};

export default TiposDeProps;

TiposDeProps.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

TiposDeProps.defaultProps = {
  title: "No tengo título",
  subtitle: "no tengo subtítulo",
  name: "Víctor",
  lastName: "Zapata",
  year: 2024,
};
