import { Layout } from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h1>Panel de Control</h1>

      <section>
        <h2>Cargar nuevo producto</h2>
        <form className="form-producto">
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre del producto" />
          </div>

          <div>
            <label htmlFor="precio">Precio:</label>
            <input type="number" id="precio" name="precio" placeholder="Ingrese el precio" />
          </div>

          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" placeholder="Ingrese la descripción del producto"></textarea>
          </div>

          <button type="submit">Guardar producto</button>
        </form>
      </section>
    </Layout>
  );
};

export { Dashboard };
