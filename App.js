/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from "react";
 import { Text, View, StyleSheet, Button, Alert } from "react-native";
 
 const style = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignContent: "center"
   },
   header: {
     textAlign: "center",
     fontSize: 18,
     padding: 10,
     color: "blue"
   },
   textScore: {
     textAlign: "center",
     fontSize: 32,
     marginBottom: 10,
     color: "red",
   },
   containerButton: {
     flexDirection: "row",
     justifyContent: "center",
     marginBottom: 10,
   },
   containerSubButtonFirst: {
     marginEnd: 10
   },
   containerSubButtonSecond: {
     marginStart: 10
   },
   button: {
     color: "red",
     fontSize: 30
   },
   startGame: {
     flexDirection: "row",
     justifyContent: "center",
     
   },
   kesempatan: {
     textAlign: "center",
     fontSize: 16,
     color: "#000",
     marginTop: 10
   },
   win: {
     textAlign: "center",
     fontSize: 16,
     color: "#000",
     marginTop: 5
   },
   lose: {
     textAlign: "center",
     fontSize: 16,
     color: "#000",
     marginBottom: 15,
     marginTop: 5
   }
 });
 
 let randomNumber = 0;
 let number = [1,2,3,4,5,6,7,8,9];
 let kesempatan = 3;
 let win = 0;
 let lose = 0;
 
 function getRandomNumber() {
   randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
 }
 
 function shuffleNumber() {
   var currentIndex = number.length, randomIndex;
 
   while(currentIndex != 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     [number[currentIndex], number[randomIndex]] = [number[randomIndex], number[currentIndex]];
   }
 
   return number;
 }
 
 const GameTebak = () => {
   // random number
   const [isRandom, setRandom] = useState(0);
   // start
   const [isStart, setStart] = useState(true);
   // value
   const [isFirst, setFirst] = useState(false);
   const [isSecond, setSecond] = useState(false);
   const [isThird, setThird] = useState(false);
   const [isFourth, setFourth] = useState(false);
   const [isFifth, setFifth] = useState(false);
   const [isSixth, setSixth] = useState(false);
   const [isSeventh, setSeventh] = useState(false);
   const [isEigth, setEigth] = useState(false);
   const [isNineth, setNineth] = useState(false);
   // color
   const [isFirstColor, setFirstColor] = useState("#5063f0");
   const [isSecondColor, setSecondColor] = useState("#5063f0");
   const [isThirdColor, setThirdColor] = useState("#5063f0");
   const [isFourthColor, setFourthColor] = useState("#5063f0");
   const [isFifthColor, setFifthColor] = useState("#5063f0");
   const [isSixthColor, setSixthColor] = useState("#5063f0");
   const [isSeventhColor, setSeventhColor] = useState("#5063f0");
   const [isEigthColor, setEigthColor] = useState("#5063f0");
   const [isNinethColor, setNinethColor] = useState("#5063f0");
   // kesempatan
   const [isChance, setChance] = useState(3);
   // win
   const [isWin, setWin] = useState(0);
   const [isLose, setLose] = useState(0);
 
   function setColor(color) {
     setFirstColor(color);
     setSecondColor(color);
     setThirdColor(color);
     setFourthColor(color);
     setFifthColor(color);
     setSixthColor(color);
     setSeventhColor(color);
     setEigthColor(color);
     setNinethColor(color);
   }
 
   function start() {
     if (isFirst == true || isSecond == true  || isThird == true  || isFourth == true 
       || isFifth == true  || isSixth == true  || isSeventh == true  || isEigth == true  || isNineth == true ) {
       setFirst(false); setSecond(false); setThird(false); setFourth(false);
       setFifth(false); setSixth(false); setSeventh(false); setEigth(false);
       setNineth(false);
     }
     setStart(false);
     shuffleNumber();
     getRandomNumber();
     setRandom(randomNumber);
     setColor("#5063f0");
     kesempatan = 3;
     setChance(kesempatan);
   }
 
   const alertStart = () => {
     Alert.alert(
       "You Win!",
       "Your Score " + win,
       [
         {
           text: "OK", onPress: () => start()
         }
       ]
     );
   }
 
   const alertWin = () => {
     Alert.alert(
       "You Win!",
       "Your Score " + win,
       [
         {
           text: "OK", onPress: () => start()
         }
       ]
     );
   }
 
   const alertLose = () => {
     Alert.alert(
       "You Lose",
       "Never Give Up!",
       [
         {
           text: "OK", onPress: () => start()
         }
       ]
     );
   }
 
   return (
     <View style={style.container}>
       <Text style={style.header}>Angka Tebakan</Text>
       <Text style={style.textScore}>{isRandom}</Text>
       <View style={style.containerButton}>
         <View style={style.containerSubButtonFirst}>
           <Button style={style.button}
             title= {
               isFirst ? "    "+number[0]+"    " : "    ?    "
             }
             onPress={() => {
               setFirst(true);
               number[0] === randomNumber ? (setFirstColor("green"), win += 1, setWin(win), alertWin()) : (setFirstColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isFirstColor}
           />
         </View>
         <View>
           <Button
             title={
               isSecond ? "    "+number[1]+"    " : "    ?    "
             }
             onPress={() => {
               setSecond(true);
               number[1] === randomNumber ? (setSecondColor("green"), win += 1, setWin(win), alertWin()) : (setSecondColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isSecondColor}
           />
         </View>
         <View style={style.containerSubButtonSecond}>
           <Button
             title={
               isThird ? "    "+number[2]+"    " : "    ?    "
             }
             onPress={() => {
               setThird(true);
               number[2] === randomNumber ? (setThirdColor("green"), win += 1, setWin(win), alertWin()): (setThirdColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isThirdColor}
           />
         </View>
       </View>
       <View style={style.containerButton}>
         <View style={style.containerSubButtonFirst}>
           <Button
             title={
               isFourth ? "    "+number[3]+"    " : "    ?    "
             }
             onPress={() => {
               setFourth(true);
               number[3] === randomNumber ? (setFourthColor("green"), win += 1, setWin(win), alertWin()) : (setFourthColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isFourthColor}
           />
         </View>
         <View>
           <Button
             title={
               isFifth ? "    "+number[4]+"    " : "    ?    "
             }
             onPress={() => {
               setFifth(true);
               number[4] === randomNumber ? (setFifthColor("green"), win += 1, setWin(win), alertWin()) : (setFifthColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isFifthColor}
           />
         </View>
         <View style={style.containerSubButtonSecond}>
           <Button
             title={
               isSixth ? "    "+number[5]+"    " : "    ?    "
             }
             onPress={() => {
               setSixth(true);
               number[5] === randomNumber ? (setSixthColor("green"), win += 1, setWin(win), alertWin()) : (setSixthColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isSixthColor}
           />
         </View>
       </View>
       <View style={style.containerButton}>
         <View style={style.containerSubButtonFirst}>
           <Button
             title={
               isSeventh ? "    "+number[6]+"    " : "    ?    "
             }
             onPress={() => {
               setSeventh(true);
               number[6] === randomNumber ? (setSeventhColor("green"), win += 1, setWin(win), alertWin()) : (setSeventhColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isSeventhColor}
           />
         </View>
         <View>
           <Button
             title={
               isEigth ? "    "+number[7]+"    " : "    ?    "
             }
             onPress={() => {
               setEigth(true);
               number[7] === randomNumber ? (setEigthColor("green"), win += 1, setWin(win), alertWin()) : (setEigthColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isEigthColor}
           />
         </View>
         <View style={style.containerSubButtonSecond}>
           <Button
             title={
               isNineth ? "    "+number[8]+"    " : "    ?    "
             }
             onPress={() => {
               setNineth(true);
               number[8] === randomNumber ? (setNinethColor("green"), win += 1, setWin(win), alertWin()) : (setNinethColor("red"), kesempatan -= 1, setChance(kesempatan));
               kesempatan === 0 ? (alertLose(),  lose += 1, setLose(lose)) : ""
             }}
             color= {isNinethColor}
           />
         </View>
       </View>
       <Text style={style.kesempatan}>Chance : {isChance}</Text>
       <Text style={style.win}>Total Win : {isWin}</Text>
       <Text style={style.lose}>Total Lose : {isLose}</Text>
       <View style={style.startGame}>
         <View>
           <Button
             color= "green"
             title="Start Game"
             onPress={() => {
               start();
             }}
           />
         </View>
       </View>
     </View>
   );
 };
 
 
 export default GameTebak;