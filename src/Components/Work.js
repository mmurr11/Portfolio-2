import "./Work.scss";

const Work = (props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <input type="checkbox" id="card1" className="more" aria-hidden="true" />
        <div className="content">
          <div className="front">
            <div className="inner">
              <h2>Hubbel.crypto</h2>
              <label for="card1" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <label for="card1" className="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <input type="checkbox" id="card1" className="more" aria-hidden="true" />
        <div className="content">
          <div className="front">
            <div className="inner">
              <h2>Hubbel.crypto</h2>
              <label for="card1" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <label for="card1" class="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <input type="checkbox" id="card2" className="more" />
        <div className="content">
          <div className="front">
            <div className="inner">
              <h2>Modern flat</h2>
              <label for="card2" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <div className="info">
                <span>4</span>
                <div className="icon">
                  <i className="fas fa-users"></i>
                  <span>people</span>
                </div>
              </div>
              <div className="info">
                <span>3</span>
                <div className="icon">
                  <i className="fas fa-door-open"></i>
                  <span>rooms</span>
                </div>
              </div>
              <div className="info">
                <span>2</span>
                <div className="icon">
                  <i className="fas fa-bed"></i>
                  <span>beds</span>
                </div>
              </div>
              <div className="info">
                <span>1</span>
                <div className="icon">
                  <i className="fas fa-bath"></i>
                  <span>bath</span>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem unde ea voluptas fuga odio vel veniam eveniet,
                  explicabo autem earum?
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div className="location">Warsaw, Poland</div>
              <div className="price">42€ / day</div>
              <label for="card2" className="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <input type="checkbox" id="card3" className="more" />
        <div className="content">
          <div className="front">
            <div className="inner">
              <h2>Luxury property</h2>
              <label for="card3" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <div className="info">
                <span>8</span>
                <div className="icon">
                  <i className="fas fa-users"></i>
                  <span>people</span>
                </div>
              </div>
              <div className="info">
                <span>7</span>
                <div className="icon">
                  <i className="fas fa-door-open"></i>
                  <span>rooms</span>
                </div>
              </div>
              <div className="info">
                <span>5</span>
                <div className="icon">
                  <i className="fas fa-bed"></i>
                  <span>beds</span>
                </div>
              </div>
              <div className="info">
                <span>2</span>
                <div className="icon">
                  <i className="fas fa-bath"></i>
                  <span>baths</span>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  libero totam nostrum consequatur autem quae provident quos
                  alias fugit maxime nisi labore, temporibus tempore illo natus
                  voluptates aliquam ipsum officia quasi placeat aut facilis
                  laudantium nam!
                </p>
                <p>
                  Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                  repudiandae aspernatur explicabo numquam! Tenetur!
                </p>
              </div>
              <div className="location">Cracow, Poland</div>
              <div className="price">60€ / day</div>
              <label for="card3" className="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
