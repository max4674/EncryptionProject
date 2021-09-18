function ObtainValue() 
			{
				var Layer1 = document.getElementById("myForm").elements[0].value;
  				var Layer2 = document.getElementById("myForm").elements[1].value;
  				var Layer3 = document.getElementById("myForm").elements[2].value;
  				var MMessage = document.getElementById("myForm").elements[3].value;

  				var MMessage = MMessage.toUpperCase();

  				var index = 0;
  				var count = MMessage.length;
  				var Rcount = count - 1;

  				var OneMessage = "";

  				if(Layer1 == "R") 
  				{
  					while (index < count) 
  					{
  						if(MMessage[index] == "A") 
  						{
  							var OneMessage = OneMessage + "N"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "B") 
  						{
  							var OneMessage = OneMessage + "O"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "C") 
  						{
  							var OneMessage = OneMessage + "P"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "D") 
  						{
  							var OneMessage = OneMessage + "Q"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "E") 
  						{
  							var OneMessage = OneMessage + "R"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "F") 
  						{
  							var OneMessage = OneMessage + "S"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "G") 
  						{
  							var OneMessage = OneMessage + "T"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "H") 
  						{
  							var OneMessage = OneMessage + "U"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "I") 
  						{
  							var OneMessage = OneMessage + "V"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "J") 
  						{
  							var OneMessage = OneMessage + "W"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "K") 
  						{
  							var OneMessage = OneMessage + "X"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "L") 
  						{
  							var OneMessage = OneMessage + "Y"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "M") 
  						{
  							var OneMessage = OneMessage + "Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "N") 
  						{
  							var OneMessage = OneMessage + "A"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "O") 
  						{
  							var OneMessage = OneMessage + "B"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "P") 
  						{
  							var OneMessage = OneMessage + "C"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Q") 
  						{
  							var OneMessage = OneMessage + "D"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "R") 
  						{
  							var OneMessage = OneMessage + "E"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "S") 
  						{
  							var OneMessage = OneMessage + "F"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "T") 
  						{
  							var OneMessage = OneMessage + "G"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "U") 
  						{
  							var OneMessage = OneMessage + "H"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "V") 
  						{
  							var OneMessage = OneMessage + "I"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "W") 
  						{
  							var OneMessage = OneMessage + "J"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "X") 
  						{
  							var OneMessage = OneMessage + "K"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Y") 
  						{
  							var OneMessage = OneMessage + "L"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Z") 
  						{
  							var OneMessage = OneMessage + "M"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "1") 
  						{
  							var OneMessage = OneMessage + "0"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "2") 
  						{
  							var OneMessage = OneMessage + "5"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "3") 
  						{
  							var OneMessage = OneMessage + "4"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "4") 
  						{
  							var OneMessage = OneMessage + "3"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "5") 
  						{
  							var OneMessage = OneMessage + "2"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "6") 
  						{
  							var OneMessage = OneMessage + "8"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "7") 
  						{
  							var OneMessage = OneMessage + "9"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "8") 
  						{
  							var OneMessage = OneMessage + "6"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "9") 
  						{
  							var OneMessage = OneMessage + "7"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "0") 
  						{
  							var OneMessage = OneMessage + "1"
  							var index = index + 1
  						}
  						else if(MMessage[index] == ' ') 
  						{
  							var OneMessage = OneMessage + "!"
  							var index = index + 1
  						}
  					}
  				}
  				else if(Layer1 == "H")
  				{
  					while (index < count) 
  					{
  						if(MMessage[index] == "A") 
  						{
  							var OneMessage = OneMessage + "41"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "B") 
  						{
  							var OneMessage = OneMessage + "42"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "C") 
  						{
  							var OneMessage = OneMessage + "43"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "D") 
  						{
  							var OneMessage = OneMessage + "44"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "E") 
  						{
  							var OneMessage = OneMessage + "45"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "F") 
  						{
  							var OneMessage = OneMessage + "46"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "G") 
  						{
  							var OneMessage = OneMessage + "47"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "H") 
  						{
  							var OneMessage = OneMessage + "48"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "I") 
  						{
  							var OneMessage = OneMessage + "49"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "J") 
  						{
  							var OneMessage = OneMessage + "4A"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "K") 
  						{
  							var OneMessage = OneMessage + "4B"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "L") 
  						{
  							var OneMessage = OneMessage + "4C"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "M") 
  						{
  							var OneMessage = OneMessage + "4D"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "N") 
  						{
  							var OneMessage = OneMessage + "4E"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "O") 
  						{
  							var OneMessage = OneMessage + "4F"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "P") 
  						{
  							var OneMessage = OneMessage + "50"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Q") 
  						{
  							var OneMessage = OneMessage + "51"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "R") 
  						{
  							var OneMessage = OneMessage + "52"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "S") 
  						{
  							var OneMessage = OneMessage + "53"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "T") 
  						{
  							var OneMessage = OneMessage + "54"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "U") 
  						{
  							var OneMessage = OneMessage + "55"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "V") 
  						{
  							var OneMessage = OneMessage + "56"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "W") 
  						{
  							var OneMessage = OneMessage + "57"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "X") 
  						{
  							var OneMessage = OneMessage + "58"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Y") 
  						{
  							var OneMessage = OneMessage + "59"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "Z") 
  						{
  							var OneMessage = OneMessage + "5A"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "1") 
  						{
  							var OneMessage = OneMessage + "1Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "2") 
  						{
  							var OneMessage = OneMessage + "2Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "3") 
  						{
  							var OneMessage = OneMessage + "3Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "4") 
  						{
  							var OneMessage = OneMessage + "4Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "5") 
  						{
  							var OneMessage = OneMessage + "5Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "6") 
  						{
  							var OneMessage = OneMessage + "6Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "7") 
  						{
  							var OneMessage = OneMessage + "7Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "8") 
  						{
  							var OneMessage = OneMessage + "8Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "9") 
  						{
  							var OneMessage = OneMessage + "9Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == "0") 
  						{
  							var OneMessage = OneMessage + "0Z"
  							var index = index + 1
  						}
  						else if(MMessage[index] == ' ') 
  						{
  							var OneMessage = OneMessage + "!Z"
  							var index = index + 1
  						}
  					}
  				}
  				else if (Layer1 == "F")
  				{
  					while (index <= Rcount) 
  					{
  						if(MMessage[Rcount] == ' ')
  						{
  							var OneMessage = OneMessage + "!";
  							var Rcount = Rcount - 1;
  						}
  						else
  						{
  							var OneMessage = OneMessage + MMessage[Rcount];
  							var Rcount = Rcount - 1;
  						}
  					}
  				}

  				var count = OneMessage.length;
  				var index = 0;
  				var Rcount = count - 1;

  				var TwoMessage = "";


  				if (Layer2 == "M") 
  				{
  					while (index < count) 
  					{
  						if(OneMessage[index] == "A") 
  						{
  							var TwoMessage = TwoMessage + "@"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "B") 
  						{
  							var TwoMessage = TwoMessage + "#"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "C") 
  						{
  							var TwoMessage = TwoMessage + "$"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "D") 
  						{
  							var TwoMessage = TwoMessage + "%"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "E") 
  						{
  							var TwoMessage = TwoMessage + "^"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "F") 
  						{
  							var TwoMessage = TwoMessage + "&"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "G") 
  						{
  							var TwoMessage = TwoMessage + "*"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "H") 
  						{
  							var TwoMessage = TwoMessage + "("
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "I") 
  						{
  							var TwoMessage = TwoMessage + ")"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "J") 
  						{
  							var TwoMessage = TwoMessage + "{"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "K") 
  						{
  							var TwoMessage = TwoMessage + "}"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "L") 
  						{
  							var TwoMessage = TwoMessage + "["
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "M") 
  						{
  							var TwoMessage = TwoMessage + "]"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "N") 
  						{
  							var TwoMessage = TwoMessage + "/"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "O") 
  						{
  							var TwoMessage = TwoMessage + "<"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "P") 
  						{
  							var TwoMessage = TwoMessage + ">"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Q") 
  						{
  							var TwoMessage = TwoMessage + "|"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "R") 
  						{
  							var TwoMessage = TwoMessage + "~"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "S") 
  						{
  							var TwoMessage = TwoMessage + "?"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "T") 
  						{
  							var TwoMessage = TwoMessage + "'"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "U") 
  						{
  							var TwoMessage = TwoMessage + ";"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "V") 
  						{
  							var TwoMessage = TwoMessage + ":"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "W") 
  						{
  							var TwoMessage = TwoMessage + "."
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "X") 
  						{
  							var TwoMessage = TwoMessage + ","
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Y") 
  						{
  							var TwoMessage = TwoMessage + "K"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Z") 
  						{
  							var TwoMessage = TwoMessage + "L"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "1") 
  						{
  							var TwoMessage = TwoMessage + "B"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "2") 
  						{
  							var TwoMessage = TwoMessage + "C"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "3") 
  						{
  							var TwoMessage = TwoMessage + "D"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "4") 
  						{
  							var TwoMessage = TwoMessage + "E"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "5") 
  						{
  							var TwoMessage = TwoMessage + "F"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "6") 
  						{
  							var TwoMessage = TwoMessage + "G"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "7") 
  						{
  							var TwoMessage = TwoMessage + "H"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "8") 
  						{
  							var TwoMessage = TwoMessage + "I"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "9") 
  						{
  							var TwoMessage = TwoMessage + "J"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "0") 
  						{
  							var TwoMessage = TwoMessage + "A"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "!") 
  						{
  							var TwoMessage = TwoMessage + "!"
  							var index = index + 1
  						}
  					}
  				}
  				else if (Layer2 == "H") 
  				{
  					while (index < count) 
  					{
  						if(OneMessage[index] == "A") 
  						{
  							var TwoMessage = TwoMessage + "41"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "B") 
  						{
  							var TwoMessage = TwoMessage + "42"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "C") 
  						{
  							var TwoMessage = TwoMessage + "43"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "D") 
  						{
  							var TwoMessage = TwoMessage + "44"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "E") 
  						{
  							var TwoMessage = TwoMessage + "45"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "F") 
  						{
  							var TwoMessage = TwoMessage + "46"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "G") 
  						{
  							var TwoMessage = TwoMessage + "47"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "H") 
  						{
  							var TwoMessage = TwoMessage + "48"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "I") 
  						{
  							var TwoMessage = TwoMessage + "49"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "J") 
  						{
  							var TwoMessage = TwoMessage + "4A"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "K") 
  						{
  							var TwoMessage = TwoMessage + "4B"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "L") 
  						{
  							var TwoMessage = TwoMessage + "4C"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "M") 
  						{
  							var TwoMessage = TwoMessage + "4D"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "N") 
  						{
  							var TwoMessage = TwoMessage + "4E"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "O") 
  						{
  							var TwoMessage = TwoMessage + "4F"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "P") 
  						{
  							var TwoMessage = TwoMessage + "50"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Q") 
  						{
  							var TwoMessage = TwoMessage + "51"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "R") 
  						{
  							var TwoMessage = TwoMessage + "52"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "S") 
  						{
  							var TwoMessage = TwoMessage + "53"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "T") 
  						{
  							var TwoMessage = TwoMessage + "54"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "U") 
  						{
  							var TwoMessage = TwoMessage + "55"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "V") 
  						{
  							var TwoMessage = TwoMessage + "56"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "W") 
  						{
  							var TwoMessage = TwoMessage + "57"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "X") 
  						{
  							var TwoMessage = TwoMessage + "58"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Y") 
  						{
  							var TwoMessage = TwoMessage + "59"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "Z") 
  						{
  							var TwoMessage = TwoMessage + "5A"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "1") 
  						{
  							var TwoMessage = TwoMessage + "1Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "2") 
  						{
  							var TwoMessage = TwoMessage + "2Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "3") 
  						{
  							var TwoMessage = TwoMessage + "3Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "4") 
  						{
  							var TwoMessage = TwoMessage + "4Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "5") 
  						{
  							var TwoMessage = TwoMessage + "5Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "6") 
  						{
  							var TwoMessage = TwoMessage + "6Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "7") 
  						{
  							var TwoMessage = TwoMessage + "7Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "8") 
  						{
  							var TwoMessage = TwoMessage + "8Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "9") 
  						{
  							var TwoMessage = TwoMessage + "9Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "0") 
  						{
  							var TwoMessage = TwoMessage + "0Z"
  							var index = index + 1
  						}
  						else if(OneMessage[index] == "!") 
  						{
  							var TwoMessage = TwoMessage + "!Z"
  							var index = index + 1
  						}
  					}
  				}
  				else if (Layer2 == "F")
  				{
  					while (index <= Rcount) 
  					{
  						if(OneMessage[Rcount] == ' ')
  						{
  							var TwoMessage = TwoMessage + "!";
  							var Rcount = Rcount - 1;
  						}
  						else
  						{
  							var TwoMessage = TwoMessage + OneMessage[Rcount];
  							var Rcount = Rcount - 1;
  						}
  					}
  				}

  				var count = TwoMessage.length;
  				var index = 0;
  				var Rcount = count - 1;

  				var FinalMessage = "";

  				if(Layer3 == "B")
  				{
  					while (index < count) 
  					{
	  					if(TwoMessage[index] == "A") 
	  						{
	  							var FinalMessage = FinalMessage + "01000001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "B") 
	  						{
	  							var FinalMessage = FinalMessage + "01000010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "C") 
	  						{
	  							var FinalMessage = FinalMessage + "01000011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "D") 
	  						{
	  							var FinalMessage = FinalMessage + "01000100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "E") 
	  						{
	  							var FinalMessage = FinalMessage + "01000101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "F") 
	  						{
	  							var FinalMessage = FinalMessage + "01000110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "G") 
	  						{
	  							var FinalMessage = FinalMessage + "01000111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "H") 
	  						{
	  							var FinalMessage = FinalMessage + "01001000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "I") 
	  						{
	  							var FinalMessage = FinalMessage + "01001001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "J") 
	  						{
	  							var FinalMessage = FinalMessage + "01001010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "K") 
	  						{
	  							var FinalMessage = FinalMessage + "01001011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "L") 
	  						{
	  							var FinalMessage = FinalMessage + "01001100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "M") 
	  						{
	  							var FinalMessage = FinalMessage + "01001101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "N") 
	  						{
	  							var FinalMessage = FinalMessage + "01001110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "O") 
	  						{
	  							var FinalMessage = FinalMessage + "01001111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "P") 
	  						{
	  							var FinalMessage = FinalMessage + "01010000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Q") 
	  						{
	  							var FinalMessage = FinalMessage + "01010001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "R") 
	  						{
	  							var FinalMessage = FinalMessage + "01010010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "S") 
	  						{
	  							var FinalMessage = FinalMessage + "01010011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "T") 
	  						{
	  							var FinalMessage = FinalMessage + "01010100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "U") 
	  						{
	  							var FinalMessage = FinalMessage + "01010101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "V") 
	  						{
	  							var FinalMessage = FinalMessage + "01010110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "W") 
	  						{
	  							var FinalMessage = FinalMessage + "01010111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "X") 
	  						{
	  							var FinalMessage = FinalMessage + "01011000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Y") 
	  						{
	  							var FinalMessage = FinalMessage + "01011001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Z") 
	  						{
	  							var FinalMessage = FinalMessage + "01011010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "0") 
	  						{
	  							var FinalMessage = FinalMessage + "00110000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "1") 
	  						{
	  							var FinalMessage = FinalMessage + "00110001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "2") 
	  						{
	  							var FinalMessage = FinalMessage + "00110010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "3") 
	  						{
	  							var FinalMessage = FinalMessage + "00110011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "4") 
	  						{
	  							var FinalMessage = FinalMessage + "00110100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "5") 
	  						{
	  							var FinalMessage = FinalMessage + "00110101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "6") 
	  						{
	  							var FinalMessage = FinalMessage + "00110110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "7") 
	  						{
	  							var FinalMessage = FinalMessage + "00110111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "8") 
	  						{
	  							var FinalMessage = FinalMessage + "00111000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "9") 
	  						{
	  							var FinalMessage = FinalMessage + "00111001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "!") 
	  						{
	  							var FinalMessage = FinalMessage + "00000000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "@") 
	  						{
	  							var FinalMessage = FinalMessage + "01000000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "#") 
	  						{
	  							var FinalMessage = FinalMessage + "00100011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "$") 
	  						{
	  							var FinalMessage = FinalMessage + "00100100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "%") 
	  						{
	  							var FinalMessage = FinalMessage + "00100101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "^") 
	  						{
	  							var FinalMessage = FinalMessage + "01011110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "&") 
	  						{
	  							var FinalMessage = FinalMessage + "00100110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "*") 
	  						{
	  							var FinalMessage = FinalMessage + "00101010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "(") 
	  						{
	  							var FinalMessage = FinalMessage + "00101000"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ")") 
	  						{
	  							var FinalMessage = FinalMessage + "00101001"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "{") 
	  						{
	  							var FinalMessage = FinalMessage + "01111011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "}") 
	  						{
	  							var FinalMessage = FinalMessage + "01111101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "[") 
	  						{
	  							var FinalMessage = FinalMessage + "01011011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "]") 
	  						{
	  							var FinalMessage = FinalMessage + "01011101"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "/") 
	  						{
	  							var FinalMessage = FinalMessage + "00101111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "<") 
	  						{
	  							var FinalMessage = FinalMessage + "00111100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ">") 
	  						{
	  							var FinalMessage = FinalMessage + "00111110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "|") 
	  						{
	  							var FinalMessage = FinalMessage + "01111100"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "~") 
	  						{
	  							var FinalMessage = FinalMessage + "01111110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "?") 
	  						{
	  							var FinalMessage = FinalMessage + "00111111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "'") 
	  						{
	  							var FinalMessage = FinalMessage + "00100111"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ";") 
	  						{
	  							var FinalMessage = FinalMessage + "00111011"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ":") 
	  						{
	  							var FinalMessage = FinalMessage + "00111010"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ".") 
	  						{
	  							var FinalMessage = FinalMessage + "00101110"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ",") 
	  						{
	  							var FinalMessage = FinalMessage + "00101100"
	  							var index = index + 1
	  						}
	  				}
  				}
  				else if(Layer3 == "D")
  				{
  					while (index < count) 
  					{
	  					if(TwoMessage[index] == "A") 
	  						{
	  							var FinalMessage = FinalMessage + "AB"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "B") 
	  						{
	  							var FinalMessage = FinalMessage + "BC"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "C") 
	  						{
	  							var FinalMessage = FinalMessage + "CD"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "D") 
	  						{
	  							var FinalMessage = FinalMessage + "DE"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "E") 
	  						{
	  							var FinalMessage = FinalMessage + "EF"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "F") 
	  						{
	  							var FinalMessage = FinalMessage + "FG"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "G") 
	  						{
	  							var FinalMessage = FinalMessage + "GH"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "H") 
	  						{
	  							var FinalMessage = FinalMessage + "HI"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "I") 
	  						{
	  							var FinalMessage = FinalMessage + "IJ"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "J") 
	  						{
	  							var FinalMessage = FinalMessage + "JK"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "K") 
	  						{
	  							var FinalMessage = FinalMessage + "KL"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "L") 
	  						{
	  							var FinalMessage = FinalMessage + "LM"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "M") 
	  						{
	  							var FinalMessage = FinalMessage + "MN"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "N") 
	  						{
	  							var FinalMessage = FinalMessage + "NO"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "O") 
	  						{
	  							var FinalMessage = FinalMessage + "OP"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "P") 
	  						{
	  							var FinalMessage = FinalMessage + "PQ"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Q") 
	  						{
	  							var FinalMessage = FinalMessage + "QR"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "R") 
	  						{
	  							var FinalMessage = FinalMessage + "RS"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "S") 
	  						{
	  							var FinalMessage = FinalMessage + "ST"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "T") 
	  						{
	  							var FinalMessage = FinalMessage + "TU"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "U") 
	  						{
	  							var FinalMessage = FinalMessage + "UV"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "V") 
	  						{
	  							var FinalMessage = FinalMessage + "VW"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "W") 
	  						{
	  							var FinalMessage = FinalMessage + "WX"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "X") 
	  						{
	  							var FinalMessage = FinalMessage + "XY"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Y") 
	  						{
	  							var FinalMessage = FinalMessage + "YZ"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Z") 
	  						{
	  							var FinalMessage = FinalMessage + "ZA"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "0") 
	  						{
	  							var FinalMessage = FinalMessage + "01"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "1") 
	  						{
	  							var FinalMessage = FinalMessage + "12"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "2") 
	  						{
	  							var FinalMessage = FinalMessage + "23"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "3") 
	  						{
	  							var FinalMessage = FinalMessage + "34"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "4") 
	  						{
	  							var FinalMessage = FinalMessage + "45"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "5") 
	  						{
	  							var FinalMessage = FinalMessage + "56"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "6") 
	  						{
	  							var FinalMessage = FinalMessage + "67"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "7") 
	  						{
	  							var FinalMessage = FinalMessage + "78"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "8") 
	  						{
	  							var FinalMessage = FinalMessage + "89"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "9") 
	  						{
	  							var FinalMessage = FinalMessage + "90"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "!") 
	  						{
	  							var FinalMessage = FinalMessage + "!!"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "@") 
	  						{
	  							var FinalMessage = FinalMessage + "@#"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "#") 
	  						{
	  							var FinalMessage = FinalMessage + "#$"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "$") 
	  						{
	  							var FinalMessage = FinalMessage + "$%"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "%") 
	  						{
	  							var FinalMessage = FinalMessage + "%^"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "^") 
	  						{
	  							var FinalMessage = FinalMessage + "^&"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "&") 
	  						{
	  							var FinalMessage = FinalMessage + "&*"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "*") 
	  						{
	  							var FinalMessage = FinalMessage + "*("
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "(") 
	  						{
	  							var FinalMessage = FinalMessage + "()"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ")") 
	  						{
	  							var FinalMessage = FinalMessage + "){"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "{") 
	  						{
	  							var FinalMessage = FinalMessage + "{}"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "}") 
	  						{
	  							var FinalMessage = FinalMessage + "}["
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "[") 
	  						{
	  							var FinalMessage = FinalMessage + "[]"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "]") 
	  						{
	  							var FinalMessage = FinalMessage + "]/"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "/") 
	  						{
	  							var FinalMessage = FinalMessage + "/<"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "<") 
	  						{
	  							var FinalMessage = FinalMessage + "<>"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ">") 
	  						{
	  							var FinalMessage = FinalMessage + ">|"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "|") 
	  						{
	  							var FinalMessage = FinalMessage + "|~"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "~") 
	  						{
	  							var FinalMessage = FinalMessage + "~?"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "?") 
	  						{
	  							var FinalMessage = FinalMessage + "?'"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "'") 
	  						{
	  							var FinalMessage = FinalMessage + "';"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ";") 
	  						{
	  							var FinalMessage = FinalMessage + ";:"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ":") 
	  						{
	  							var FinalMessage = FinalMessage + ":."
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ".") 
	  						{
	  							var FinalMessage = FinalMessage + ".,"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ",") 
	  						{
	  							var FinalMessage = FinalMessage + ",@"
	  							var index = index + 1
	  						}
	  				}
  				}
  				else if(Layer3 == "R")
  				{
  					while (index < count) 
  					{
	  					if(TwoMessage[index] == "A") 
	  						{
	  							var FinalMessage = FinalMessage + "N"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "B") 
	  						{
	  							var FinalMessage = FinalMessage + "O"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "C") 
	  						{
	  							var FinalMessage = FinalMessage + "P"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "D") 
	  						{
	  							var FinalMessage = FinalMessage + "Q"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "E") 
	  						{
	  							var FinalMessage = FinalMessage + "R"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "F") 
	  						{
	  							var FinalMessage = FinalMessage + "S"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "G") 
	  						{
	  							var FinalMessage = FinalMessage + "T"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "H") 
	  						{
	  							var FinalMessage = FinalMessage + "U"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "I") 
	  						{
	  							var FinalMessage = FinalMessage + "V"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "J") 
	  						{
	  							var FinalMessage = FinalMessage + "W"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "K") 
	  						{
	  							var FinalMessage = FinalMessage + "X"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "L") 
	  						{
	  							var FinalMessage = FinalMessage + "Y"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "M") 
	  						{
	  							var FinalMessage = FinalMessage + "Z"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "N") 
	  						{
	  							var FinalMessage = FinalMessage + "A"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "O") 
	  						{
	  							var FinalMessage = FinalMessage + "B"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "P") 
	  						{
	  							var FinalMessage = FinalMessage + "C"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Q") 
	  						{
	  							var FinalMessage = FinalMessage + "D"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "R") 
	  						{
	  							var FinalMessage = FinalMessage + "E"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "S") 
	  						{
	  							var FinalMessage = FinalMessage + "F"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "T") 
	  						{
	  							var FinalMessage = FinalMessage + "G"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "U") 
	  						{
	  							var FinalMessage = FinalMessage + "H"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "V") 
	  						{
	  							var FinalMessage = FinalMessage + "I"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "W") 
	  						{
	  							var FinalMessage = FinalMessage + "J"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "X") 
	  						{
	  							var FinalMessage = FinalMessage + "K"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Y") 
	  						{
	  							var FinalMessage = FinalMessage + "L"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "Z") 
	  						{
	  							var FinalMessage = FinalMessage + "M"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "0") 
	  						{
	  							var FinalMessage = FinalMessage + "5"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "1") 
	  						{
	  							var FinalMessage = FinalMessage + "6"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "2") 
	  						{
	  							var FinalMessage = FinalMessage + "7"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "3") 
	  						{
	  							var FinalMessage = FinalMessage + "8"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "4") 
	  						{
	  							var FinalMessage = FinalMessage + "9"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "5") 
	  						{
	  							var FinalMessage = FinalMessage + "0"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "6") 
	  						{
	  							var FinalMessage = FinalMessage + "1"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "7") 
	  						{
	  							var FinalMessage = FinalMessage + "2"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "8") 
	  						{
	  							var FinalMessage = FinalMessage + "3"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "9") 
	  						{
	  							var FinalMessage = FinalMessage + "4"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "!") 
	  						{
	  							var FinalMessage = FinalMessage + "!"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "@") 
	  						{
	  							var FinalMessage = FinalMessage + "@"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "#") 
	  						{
	  							var FinalMessage = FinalMessage + "#"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "$") 
	  						{
	  							var FinalMessage = FinalMessage + "$"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "%") 
	  						{
	  							var FinalMessage = FinalMessage + "%"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "^") 
	  						{
	  							var FinalMessage = FinalMessage + "^"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "&") 
	  						{
	  							var FinalMessage = FinalMessage + "&"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "*") 
	  						{
	  							var FinalMessage = FinalMessage + "*"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "(") 
	  						{
	  							var FinalMessage = FinalMessage + "("
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ")") 
	  						{
	  							var FinalMessage = FinalMessage + ")"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "{") 
	  						{
	  							var FinalMessage = FinalMessage + "{"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "}") 
	  						{
	  							var FinalMessage = FinalMessage + "}"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "[") 
	  						{
	  							var FinalMessage = FinalMessage + "["
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "]") 
	  						{
	  							var FinalMessage = FinalMessage + "]"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "/") 
	  						{
	  							var FinalMessage = FinalMessage + "/"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "<") 
	  						{
	  							var FinalMessage = FinalMessage + "<"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ">") 
	  						{
	  							var FinalMessage = FinalMessage + ">"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "|") 
	  						{
	  							var FinalMessage = FinalMessage + "|"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "~") 
	  						{
	  							var FinalMessage = FinalMessage + "~"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "?") 
	  						{
	  							var FinalMessage = FinalMessage + "?"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == "'") 
	  						{
	  							var FinalMessage = FinalMessage + "'"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ";") 
	  						{
	  							var FinalMessage = FinalMessage + ";"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ":") 
	  						{
	  							var FinalMessage = FinalMessage + ":"
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ".") 
	  						{
	  							var FinalMessage = FinalMessage + "."
	  							var index = index + 1
	  						}
	  					else if(TwoMessage[index] == ",") 
	  						{
	  							var FinalMessage = FinalMessage + ","
	  							var index = index + 1
	  						}
	  				}
  				}

  				var Flength = FinalMessage.length;
  				var index = 0;
  				var FFMessage = "";
  				var count = 0;

  				while(index < Flength)
  				{
  					if (Layer3 == "B") 
  					{
  						var count = 0;

  						while(count <= 7)
  						{
  							var FFMessage = FFMessage + FinalMessage[index]
  							var index = index + 1
  							var count = count + 1
  						}

  						var FFMessage = FFMessage + " "
  					}
  					else if (Layer3 == "D")
  				    {
  				    	var count = 0

  						while(count <= 1)
  						{
  							var FFMessage = FFMessage + FinalMessage[index]
  							var index = index + 1
  							var count = count + 1
  						}

  						var FFMessage = FFMessage + " "
  					}
  					else if (Layer3 == "R")
  					{
  						var FFMessage = FFMessage + FinalMessage[index]
  						var FFMessage = FFMessage + " "
  						var index = index + 1
  					}
  				}

  				document.getElementById("EMessage").innerHTML = Layer1+Layer2+Layer3+" "+FFMessage;
			}