import { View, Text, StatusBar, Image, Picker } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const AddCases = () => {
  const navigation = useNavigation();
  const[Select, setSelect] = useState('');
  const[caseDesc, setCaseDesc] = useState('');
  const[filingDate, setFilingDate] = useState('');
  const[hearingDate, setHearingDate] = useState('');
  const[deadline, setDeadline] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const options = ['Criminal', 'Property & Family', 'Divorce'];

  const handleSubmit = () => {
    const requestData = {
      "case_type_id": 4,
      "case_description": caseDesc,
      "filling_date": filingDate,
      "hearing_date": hearingDate,
      "deadline_date": deadline
    };

    try {
      Helper.makeRequest({url: ApiUrl.addCase, data: requestData, method: 'POST'}).then((data) => {
       console.log("This is my data" ,data);
     });
       console.log('API Response:', response.data);
     } catch (error) {
       console.error('API Error:', error);
     }
  };

  return (
    <SafeAreaView style = {{backgroundColor: colors.white, height: '100%'}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />


    <View>
      <TouchableOpacity activeOpacity={0.3}
                        style={{
                            marginLeft: Utils.ScreenWidth(3),
                            alignItems: 'center',
                            elevation: 7,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            justifyContent: 'center',
                            top: Utils.ScreenHeight(3),
                            width: Utils.ScreenWidth(12),
                            height: Utils.ScreenHeight(6),}}
                            onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image source={ImagesPath.signUp.backIcon} 
                        style={{
                        resizeMode: 'contain',
                        height: Utils.ScreenWidth(4.8),
                        width: Utils.ScreenWidth(5.8),}} />
                    </TouchableOpacity>
                    <View style = {{marginTop: Utils.ScreenHeight(4), marginHorizontal: Utils.ScreenWidth(4)}}>
                    <Text style = {{fontWeight: 800, fontSize: 24, color: colors.black, alignItems: 'center', justifyContent: 'center'}}>Add Cases</Text>
             </View>
        </View>

     <ScrollView
        style={{ flex: 1, backgroundColor: colors.white, marginHorizontal: Utils.ScreenWidth(4) }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>

    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Utils.ScreenWidth(5)}}>    
      <Text style={{ color: colors.grey, fontSize: 15, fontWeight: '600', marginTop: Utils.ScreenHeight(1) }}>
       • Case Info
     </Text>

     <Text style={{ color: colors.grey, fontSize: 15, fontWeight: '600', marginTop: Utils.ScreenHeight(1) }}>
       Status Attachment
     </Text>
     </View>    

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(3), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Case Type</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={Select}
                        onChange={(text) => setSelect(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Case Description</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={caseDesc}
                        onChange={(text) => setCaseDesc(text)}
                        style={{ height: Utils.ScreenHeight(12), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Filing Date</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={filingDate}
                        onChange={(text) => setFilingDate(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Hearing Date</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={hearingDate}
                        onChange={(text) => setHearingDate(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Deadline</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={deadline}
                        onChange={(text) => setDeadline(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Relevant Documents</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={Select}
                        onChange={(text) => setSelect(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>
 
            <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         marginHorizontal: Utils.ScreenHeight(8), 
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: '100%'}}
                                         onPress  = {() => {handleSubmit()}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16,  marginHorizontal: Utils.ScreenHeight(6),}}>
                Continue
               </Text>
            </TouchableOpacity>
          </View>

     </ScrollView>
    </SafeAreaView>
  )
}

export default AddCases