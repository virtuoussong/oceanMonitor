import React, { useState, useEffect } from 'react';
import {StyleSheet, Picker, TouchableOpacity, View, ImagePropTypes, Text} from 'react-native';

const CalendarPickerView = (props) => {
    const [yearArray, setYearArray] = useState([])
    const [monthsArray, setMonthsArray] = useState([])
    const [daysArray, setDaysArray] = useState([])

    const [selectedYearIndex, setSelectedYearIndex] = useState(0)
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0)
    const [selectedDayIndex, setSelectedDayIndex] = useState(0)

    const [selectedYear, setSelectedYear] = useState()
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedDay, setSelectedDay] = useState(0)

    useEffect(()=>{
        prepareCalendarData()
    }, [])

    
    let arrayForMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const prepareCalendarData = () => {
        let data = new Date()
        let thisYear = data.getFullYear()
        console.log(thisYear)
        let yearsCreated = []
        for (let i = 0; i < 100; i++) {
            let addedYear = parseInt(thisYear - 3, 10)  + i
            yearsCreated.push(addedYear)
        }
        setYearArray(yearsCreated)
        setMonthsArray(arrayForMonths)
        
        let thisMonth = data.getMonth() + 1
        setSelectedMonth(thisMonth)
        setSelectedYear(data.getFullYear())
        
    }

    useEffect(()=>{
        setDaysArrayList()
    }, [selectedYear, selectedMonth])

    // let lastDay = 31
    const setDaysArrayList = () => {
        let lastDay = new Date(selectedYear, selectedMonth, 0).getDate()

        let arryForDays = []
        for (let i = 0; i <  parseInt(lastDay); i++) {
            arryForDays.push(i + 1)
        }
        setDaysArray(arryForDays)

        let date = new Date()
        let thisYear = date.getFullYear()
        let thisMonth = date.getMonth() + 1

        console.log(thisYear, thisMonth, selectedYear, selectedMonth)
        if (thisYear == selectedYear && thisMonth == selectedMonth) {
            arryForDays.forEach((item)=>{
                if (item == new Date().getDate()) {
                    setSelectedDay(item)
                }
            })
        }
        
    }

    useEffect(()=>{

    }, [daysArray])

    const yearSelected = (i) => {
        console.log("selected year from picker", i)
        setSelectedYear(i)
    }

    const monthSelected = (i) => {
        console.log("month", i)
        setSelectedMonth(i)
    }

    const daySelected = (i) => {
        console.log("day", i)
        setSelectedDay(i)
    }

    const closeCalendar = () => {
        props.close()
    }

    const datesSelected = () => {
        let date = `${selectedYear}-${selectedMonth}-${selectedDay}`
        props.setDate(date)
        props.close()
    }

    return <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0, 0, 1, 0.5)"}} onPress={()=>closeCalendar()}>
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Picker style={{width: 150, height: '100%', }} onValueChange={(i)=>yearSelected(i)} selectedValue={selectedYear}>
                    {yearArray.map((item)=>{
                        return <Picker.Item label={`${item}년`} value={item}/>
                    })}
                </Picker>
                <Picker style={{width: 100, height: '100%'}} onValueChange={(i)=>monthSelected(i)} selectedValue={selectedMonth}>
                    {monthsArray.map((item)=>{
                        return <Picker.Item label={`${item}월`} value={item}/>
                    })}
                </Picker>
                <Picker style={{width: 100, height: '100%'}} onValueChange={(i)=>daySelected(i)} selectedValue={selectedDay}>
                    {daysArray.map((item)=>{
                        return <Picker.Item label={`${item}일`} value={item}/>
                    })}
                </Picker>
            </View>

            <View style={{flexDirection: 'row', width: '80%', marginTop: 32, marginHorizontal: 'auto', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>closeCalendar()} style={{marginRight: 60, backgroundColor: 'lightgray', borderRadius: 10}}><Text style={{paddingHorizontal: 30, paddingVertical: 15, fontWeight: 'bold', color: 'white'}}>취소</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>datesSelected()} style={{marginLeft: 60, backgroundColor: 'dodgerblue', borderRadius: 10}}><Text style={{paddingHorizontal: 30, paddingVertical: 15, fontWeight: 'bold', color: 'white'}}>확인</Text></TouchableOpacity>
            </View>
        </View>
        
        
        
    </TouchableOpacity>
}

export default CalendarPickerView;

const styles = StyleSheet.create({
    modalContainer: {
       
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        paddingTop: 60,
        
    },
    container: {
        alignItems: 'center', 
        alignSelf: 'center', 
        backgroundColor: 'white', 
        width: '60%', 
        height: '50%',
        borderRadius: 15
    },
    
})

