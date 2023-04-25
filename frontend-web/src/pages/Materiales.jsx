import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import TablaMateriales from '../components/materiales/TablaMateriales'

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledCollapse,
  Row,
  Card,
  CardHeader,
  Col,
} from "reactstrap";
import classnames from "classnames";

import BreadCrumb from "../components/common/BreadCrumb";

const Materiales = () => {
  const [listaMateriales, setListaMateriales] = useState([
    {
      id: 1,
      nombre: "Camara cannon",
      categoria: "Fotografia",
      costo: 1000,
      presentacion: "Unidad",
      area: "Fotografia",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 2,
      nombre: "Laptop Dell",
      categoria: "Computacion",
      costo: 1500,
      presentacion: "Unidad",
      area: "Tecnologia",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 3,
      nombre: "Smartphone Samsung",
      categoria: "Telefonia",
      costo: 800,
      presentacion: "Unidad",
      area: "Tecnologia",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 4,
      nombre: "Reloj Casio",
      categoria: "Accesorios",
      costo: 200,
      presentacion: "Unidad",
      area: "Moda",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 5,
      nombre: "Bocinas Bose",
      categoria: "Audio",
      costo: 500,
      presentacion: "Par",
      area: "Audio",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 6,
      nombre: "Silla de oficina",
      categoria: "Muebles",
      costo: 300,
      presentacion: "Unidad",
      area: "Mobiliario",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 7,
      nombre: "Audifonos Sony",
      categoria: "Audio",
      costo: 100,
      presentacion: "Unidad",
      area: "Audio",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 8,
      nombre: "Pantalla LG",
      categoria: "TV y Video",
      costo: 1200,
      presentacion: "Unidad",
      area: "Electronica",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 9,
      nombre: "Horno de microondas",
      categoria: "Electrodomesticos",
      costo: 250,
      presentacion: "Unidad",
      area: "Hogar",
      imagenes: ["marcador.jpg"]
    },
    {
      id: 10,
      nombre: "Cepillo de dientes electrico",
      categoria: "Cuidado personal",
      costo: 50,
      presentacion: "Unidad",
      area: "Salud y Belleza",
      imagenes: ["marcador.jpg"]
    }
  ]
  );

  const columns = useMemo(() => [
    {
      Header: "#",
      Cell: () => {
        return <input type="checkbox" />;
      },
    },
    {
      Header: "Material",
      Cell: (material) => (
        <>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 me-3">
              <div className="avatar-sm bg-light rounded p-1">
                <img
                  src={"/assets/img/materiales/" + material.row.original?.imagenes[0]}
                  alt={`Imagen del material ${material.row.original.nombre}`}
                  className="img-fluid d-block"
                  width={50}
                />
              </div>
            </div>
            <div className="flex-grow-1">
              <h5 className="fs-14 mb-1">
                <Link
                  to="/apps-ecommerce-product-details"
                  className="text-dark"
                >
                  {" "}
                  {material.row.original.nombre}
                </Link>
              </h5>
            </div>
          </div>
        </>
      ),
    },
    {
      Header: "Categoria",
      accessor: "categoria",
      filterable: true,
    },
    {
      Header: "Costo",
      accessor: "costo",
      filterable: false,
      Cell: (cellProps) => {
        return <>{"$ " + cellProps.value + ".00"}</>;
      },
    },
    {
      Header: "Presentación",
      accessor: "presentacion",
      filterable: false,
    },
    {
      Header: "Area",
      accessor: "area",
      filterable: false,
    },
    {
      Header: "Action",
      Cell: (cellProps) => {
        return (
          <UncontrolledDropdown>
            <DropdownToggle
              href="#"
              className="btn-soft-secondary btn-sm"
              tag="button"
            >
              <i className="ri-more-fill" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="apps-ecommerce-product-details">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                View
              </DropdownItem>

              <DropdownItem href="apps-ecommerce-add-product">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                Edit
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem
                href="#"
                onClick={() => {
                  const productData = cellProps.row.original;
                  onClickDelete(productData);
                }}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ],
    []
  );

  document.body.style = 'background: #F5F5F5';

  return (
    <Container fluid>
      <BreadCrumb title="Materiales" />

      <Row className='mt-3 d-flex justify-content-center'>
        <Col xs={12} md={11}>
          <div className="card-body bg-white rounded-3">
            <h5 className='p-3 border-bottom border-4'>Catálogo</h5>

            {/* Busqueda de materiales */}
            <div className="col-sm">
              <form className="d-flex justify-content-start">
                <div className="search-box my-2 ms-3  d-flex ">
                  <label htmlFor="busqueda" className='form-label d-flex align-items-center border border-1 h-100 rounded-start-2 rounded-2'>
                    <i className="ri-search-line search-icon px-2"></i>
                  </label>
                  <input
                    id='busqueda'
                    name='busqueda'
                    type="text"
                    className="form-control"
                    placeholder="Buscar materiales..."
                  />
                </div>
              </form>
            </div>


            <TabContent className="text-muted">
              <TabPane>
                <div
                  id="table-product-list-all"
                  className="table-card gridjs-border-none pb-2"
                >
                  {listaMateriales && listaMateriales.length > 0 ? (
                    <TablaMateriales
                      columns={columns}
                      data={(listaMateriales || [])}
                      isGlobalFilter={false}
                      isAddUserList={false}
                      customPageSize={5}
                      divClass="table-responsive mb-1"
                      tableClass="mb-0 align-middle"
                      theadClass="table-light text-muted"
                    />
                  ) : (
                    <div className="py-4 text-center">
                      <div>
                        <lord-icon
                          src="https://cdn.lordicon.com/msoeawqm.json"
                          trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c"
                          style={{ width: "72px", height: "72px" }}
                        ></lord-icon>
                      </div>

                      <div className="mt-4">
                        <h5>Sorry! No Result Found</h5>
                      </div>
                    </div>
                  )}
                </div>
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Materiales