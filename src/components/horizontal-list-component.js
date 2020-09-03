import React,{useState} from 'react'
import {View, FlatList,Modal} from 'react-native'
import ScrollItem from './scroll-Item'
import Detail from '../screens/detail-page';


const HorizontalList = ({items, navigation}) => {

    const [detailModal,setDetailModel] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)

    const showDetail = (item) =>{
        setSelectedItem(item)
        setDetailModel(true);
    }

    const closeDetail = () => {
        setSelectedItem(null);
        setDetailModel(false);
    }


    return (
        <View >
            <FlatList 
                data={items}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>( 
                    <ScrollItem  
                        item={item}
                        animation = "bounceInLeft"
                        backgroundColor="#FCFCFC"
                        color="#000"
                        handleClick={showDetail}
                    />
                )}
                keyExtractor={(item) => item.id}
                />

                <Modal
                        transparent
                        visible={detailModal}
                        onRequestClose={() => closeDetail()}
                    >
                        <Detail {...selectedItem} closeModal={closeDetail}/>
                </Modal>
        </View>
    )
}


export default HorizontalList;



