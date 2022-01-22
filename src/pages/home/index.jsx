import './home.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'
import MovieCard from '../../components/card'
import { FavoritesContext } from '../../providers/favorites'

export default function Home() {

    const { favorites } = React.useContext(FavoritesContext)

    // console.log(favorites)

    const data = [
        {
            id: 1,
            image: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2022/01/legiao_C7vptlAEgcIW.png.jpeg',
            title: 'Teste 1',
            description: 'Teste descrição 1'
        },
        {
            id: 2,
            image: 'https://sm.ign.com/t/ign_pt/news/j/joker-2-re/joker-2-reportedly-set-to-be-written-by-original-director_a1kp.1280.jpg',
            title: 'Teste 2',
            description: 'Teste descrição 2'
        },
        {
            id: 3,
            image: 'https://i2.wp.com/www.salvandonerd.blog.br/wp-content/uploads/2018/05/Watchman-HBO-Series-In-The-Works.jpg?fit=1024%2C512&ssl=1',
            title: 'Teste 3',
            description: 'Teste descrição 3'
        }
    ]

    const axios = require('axios');

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [currentMovie, setCurrentMovie] = useState({})
    const [imageField, setImageField] = useState('')
    const [titleField, setTitleField] = useState('')
    const [descriptionField, setDescriptionField] = useState('')

    useEffect(() => {

        axios.get('https://ctdsummerweek.nerdasaservice.com.br/filme')
            .then(
                success => console.log(success)
            )
            .catch(
                error => console.log(error)
            )

    }, [])

    function setDataModal(movie, isEdition) {

        setModalVisibility(true)
        setModalEdit(isEdition)

        if (movie === '') {

            setImageField('')
            setTitleField('')
            setDescriptionField('')

        } else {

            setImageField(movie.image)
            setTitleField(movie.title)
            setDescriptionField(movie.description)

        }

        // setCurrentMovie(movie)

    }

    function saveMovie(movie) {

        if(modalEdit) {

            // criar filme
            setModalVisibility(false)

        } else {

            // editar filme
            setModalVisibility(false)

        }

        alert('carrega a lista novamente')

    }

    return (
        <>

            <Modal show={modalVisibility} onHide={() => setModalVisibility(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalEdit ? 'Editar' : 'Cadastrar'} Filme</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>

                        {/* <img className='preview' src={imageField} /> */}

                        <Form.Group className="mb-3" controlId="formUrl">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control type="text" value={imageField} placeholder="Adicione uma URL" onChange={change => setImageField(change.target.value)} />
                            <Form.Text className="text-muted">
                                Essa imagem será exibida no Card do filme.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" value={titleField} placeholder="Título do Filme" onChange={change => setTitleField(change.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" value={descriptionField} rows={3} placeholder="Breve descrição sobre o Filme" onChange={change => setDescriptionField(change.target.value)} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    {
                        modalEdit &&
                        <Button variant="danger" onClick={() => setModalVisibility(false)}>
                            Deletar
                        </Button>
                    }
                    <Button variant="success" onClick={() => saveMovie(false)}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>

            <header className='main-header'>
                <img src="https://www.digitalhouse.com/logo-DH.png" />
            </header>
            <main className='main-content'>

                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3 tabs">
                    <Tab eventKey="all" title="Todos">

                        <Container>
                            <Row>
                                {
                                    data.map(movie => {

                                        return (
                                            <Col sm={12} md={4} key={movie.id}>
                                                <MovieCard
                                                    movie={movie}
                                                    favorited={ favorites.find(item => item.id === movie.id) }
                                                    openDetails={movie => {
                                                        setDataModal(movie, true)
                                                    }}
                                                />
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Container>

                    </Tab>
                    <Tab eventKey="favorites" title={`Favoritos ${favorites.length}`}>

                        <Container>
                            <Row>
                                {
                                    favorites.map(movie => {

                                        return (
                                            <Col sm={12} md={4} key={movie.id}>
                                                <MovieCard
                                                    movie={movie}
                                                    favorited={true}
                                                    openDetails={movie => {
                                                        setDataModal(movie, true)
                                                    }}
                                                />
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Container>

                    </Tab>
                </Tabs>

            </main>
            <Button className='fab' variant="success" onClick={() => {
                setDataModal('', false)
            }}>
                <span className="material-icons-outlined">add</span>
            </Button>
        </>
    )

}