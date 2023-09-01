import React from 'react'
import { FlatList} from 'react-native';

const Flatlist = ({itemList, renderListItem}) => {
  return (
    <FlatList 
    data={itemList}
    renderItem={renderListItem}
    keyExtractor={item => item.id}

    />
  )
}

export default Flatlist