
//ეს ოთხკუთხედს ეხება 
var Lenth = Number(prompt("Please enter Rectangle Lenth"))
var Width = Number(prompt("Please enter Rectangle Width"))
var Rectangleperimeter = Number("Lenth+Width+Lenth+Width")
var AreaOfRectangle = Number("Lenth*Width")
//ეს ოთხკუთხედს ეხება 
alert("Rectangleperimeter : " + (Lenth+Width+Lenth+Width))
console.log("Rectangleperimeter : " + (Lenth+Width+Lenth+Width)) 
alert("AreaOfRectangle : " + (Lenth*Width))
console.log("AreaOfRectangle : " + (Lenth*Width))

//ეს სამკუთხედს ეხება 
var FirstSide= Number(prompt("Please enter Triangle's First side"))
var SecondSide= Number(prompt("Please enter Triangle's Second side"))
var ThirdSide= Number(prompt("Please enter Triangle's Third side"))
var PerimeterOfTriangle=Number("FirstSide+SecondSide+ThirdSide")
var AreaOfTriangle=Number("(FirstSide*SecondSide)/2")
//ეს სამკუთხედს ეხება 
alert("PerimeterOfTriangle : " + (FirstSide+SecondSide+ThirdSide))
console.log("PerimeterOfTriangle : " + (FirstSide+SecondSide+ThirdSide))
alert("AreaOfTriangle : " + ("(FirstSide*SecondSide)*0.5"))
console.log("AreaOfTriangle : " + ("(FirstSide*SecondSide)*0.5"))

//ეს წამებს ეხება
var Seconds= Number(prompt("Please enter Seconds"))
//ეს წამებს ეხება
var MiliSeconds=Number("Seconds*1000")
alert("MiliSeconds :" + (Seconds*1000))
console.log("MiliSeconds :" + (Seconds*1000))

//საწვავის გამოთვლა 
var Distance = Number(prompt("Please enter Distance in KM"))
var Speed = Number(prompt("Please enter Speed in KM/HR")) 
var Fuel = Number(prompt("Please enter the amount of fuel needed to cover 100 km"))
var FuelNeeded = Number(Distance/(Fuel*Speed))
//საწვავის გამოთვლა 
alert("FuelNeeded : " + (Distance*(Speed/Fuel)))
console.log ("FuelNeeded : " + (Distance*(Speed/Fuel)))
