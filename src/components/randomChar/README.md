https://ru.reactjs.org/docs/typechecking-with-proptypes.html
https://www.npmjs.com/package/prop-types

default props:
Component.defaultProps = {}

/pages/housesPage.js
 35:
 // onItemSelected={this.onItemSelected}
 from: 
const itemList = (
<ItemList 
    // onItemSelected={this.onItemSelected}
...>)
fix:
/itemList/itemList.js
57:
ItemList.defaultProps = {
    onItemSelected: () => {}
}





default props:
interval={15000}
--
components/randomChar/randomChar.js
16:
    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval);
    }

components/app/app.js
36:
    render() {
        const char = this.state.showRandomChar ? <RandomChar interval={15000}/> : null;

or:
components/randomChar/randomChar.js
63:
RandomChar.defaultProps = {
    interval: 15000
}

or +
RandomChar.js:
16:
  static defaultProps = {
        interval: 15000
    }
    
or +
71:
RandomChar.propTypes = {
    interval: (props, propName, componentName) => {
        const value = props[propName]
        if (typeof value === 'number' && !isNaN(value)) {
            return null
        }
        return new TypeError(`${componentName}: ${propName} must be a number`)
    }
}
<!-- index.js:1446 Warning: Failed prop type: RandomChar: interval must be a number
    in RandomChar (at app.js:37)
    in App (at src/index.js:7) -->

or +
npm install prop-types
import PropTypes from 'prop-types'

RandomChar.propTypes = {
    interval: PropTypes.number
}

+
ItemList.defaultProps = {
    onItemSelected: PropTypes.func
}