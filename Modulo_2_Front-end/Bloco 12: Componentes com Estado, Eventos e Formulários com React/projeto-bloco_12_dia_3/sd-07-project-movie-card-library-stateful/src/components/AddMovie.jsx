import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addStateChange = this.addStateChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  }

  addStateChange(state, onClick) {
    onClick(state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title-label" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle-label" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="image-label" data-testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="storyline-label" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            type="text"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating-label" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
            step="0.1"
          />
        </div>
        <div>
          <label htmlFor="genre-label" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            value={this.state.genre}
            name="genre"
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option
              data-testid="genre-option"
              value="action"
            >Ação
            </option>

            <option
              data-testid="genre-option"
              value="comedy"
            >Comédia
            </option>

            <option
              data-testid="genre-option"
              value="thriller"
            >Suspense
            </option>
          </select>
        </div>
        <button
          type="button"
          data-testid="send-button"
          onClick={() => this.addStateChange(this.state, this.props.onClick)}
        >
            Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
