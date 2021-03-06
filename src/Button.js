import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pressNumber, pressClear, pressEqual, pressOperator, pressDot } from './actions'
import styles from './styles'

export const Button = ({ item, isOperator, pressNumber, pressEqual, pressClear, pressOperator, pressDot }) => {
  const handlePress = () => {
    if (typeof item === 'number') {
      pressNumber(item)
    } else {
      switch (item) {
        case '=': {
          pressEqual()
          break
        }
        case 'C': {
          pressClear()
          break
        }
        case '.': {
          pressDot()
          break
        }
        default: {
          pressOperator(item) // user press "+,-,*,/"
          break
        }
      }
    }
  }

  return (
    <TouchableOpacity key={item} style={[styles.button, { marginLeft: isOperator ? 0 : 6 }]} onPress={handlePress}>
      <Text style={styles.input}>{item}</Text>
    </TouchableOpacity>
  )
}

const MemoButton = React.memo(Button) //React memo for prevent re-rendering

const mapDispatchToProps = {
  pressNumber,
  pressClear,
  pressEqual,
  pressOperator,
  pressDot
}
export default connect(null, mapDispatchToProps)(MemoButton)
