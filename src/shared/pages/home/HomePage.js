/**
 * @typedef {Object} HomePageProps
 * @property {string} title
 * @property {string} content
 */

export class HomePage {
  /**
   * @param {HomePageProps} props
   */
  constructor(props) {
    this.title = props.title;
    this.content = props.content;
  }

  /**
   * Генерирует HTML для страницы.
   * @returns {string}
   */
  render() {
    return `
      <div>
        <h1>${this.title}</h1>
        <p>${this.content}</p>
      </div>
    `;
  }
}
