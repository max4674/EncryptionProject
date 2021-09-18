function DecryptValue() 
{
	var DMessage = document.getElementById("DecryptMessage").elements[0].value;

	var DLength = DMessage.length;
	var index = 3;

	var DLayer1 = DMessage[2];
	var DLayer2 = DMessage[1];
	var DLayer3 = DMessage[0];

	var DL1Message = "";

	while(index < DLength)
	{
		if (DMessage[index] == " ") 
		{
			index = index + 1;
		}
		else
		{
			DL1Message = DL1Message + DMessage[index];
			index = index + 1;
		}
	}

	var index = 0;
	var D1Length = DL1Message.length;
	var DL2Message = "";
	var count = 0;
	var DL1Segment = "";

	if (DLayer1 == "B") 
	{
		while(index < D1Length)
		{
			var count = count + 8;
			var index = count - 8;
			var DL1Segment = "";

			while(index < count)
			{
				var DL1Segment = DL1Segment + DL1Message[index]
				var index = index + 1;
			}
				
			if(DL1Segment == "01000001") 
		  		{
		  			var DL2Message = DL2Message + "A"
		  		}
		  	else if(DL1Segment == "01000010") 
		  		{
		  			var DL2Message = DL2Message + "B"
		  		}
		  	else if(DL1Segment == "01000011") 
		  		{
		  			var DL2Message = DL2Message + "C"
		  		}
		  	else if(DL1Segment == "01000100") 
		  		{
		  			var DL2Message = DL2Message + "D"
		  		}
		    else if(DL1Segment == "01000101") 
		  		{
		  			var DL2Message = DL2Message + "E"
		  		}
		  	else if(DL1Segment == "01000110") 
		  		{
		  			var DL2Message = DL2Message + "F"
		  		}
		  	else if(DL1Segment == "01000111") 
		  		{
		  			var DL2Message = DL2Message + "G"
		  		}
		  	else if(DL1Segment == "01001000") 
		  		{
		  			var DL2Message = DL2Message + "H"
		  		}
		  	else if(DL1Segment == "01001001") 
		  		{
		  			var DL2Message = DL2Message + "I"
		  		}
		  	else if(DL1Segment == "01001010") 
		  		{
		  			var DL2Message = DL2Message + "J"
		  		}
		  	else if(DL1Segment == "01001011") 
		  		{
		  			var DL2Message = DL2Message + "K"
		  		}
		  	else if(DL1Segment == "01001100") 
		  		{
		  			var DL2Message = DL2Message + "L"
		  		}
		  	else if(DL1Segment == "01001101") 
		  		{
		  			var DL2Message = DL2Message + "M"
		  		}
		  	else if(DL1Segment == "01001110") 
		  		{
		  			var DL2Message = DL2Message + "N"
		  		}
		  	else if(DL1Segment == "01001111") 
		  		{
		  			var DL2Message = DL2Message + "O"
		  		}
		  	else if(DL1Segment == "01010000") 
		  		{
		  			var DL2Message = DL2Message + "P"
		  		}
		    else if(DL1Segment == "01010001") 
		  		{
		  			var DL2Message = DL2Message + "Q"
		  		}
		  	else if(DL1Segment == "01010010") 
		  		{
		  			var DL2Message = DL2Message + "R"
		  		}
		  	else if(DL1Segment == "01010011") 
		  		{
		  			var DL2Message = DL2Message + "S"
		  		}
		  	else if(DL1Segment == "01010100") 
		  		{
		  			var DL2Message = DL2Message + "T"
		  		}
		  	else if(DL1Segment == "01010101") 
		  		{
		  			var DL2Message = DL2Message + "U"
		  		}
		  	else if(DL1Segment == "01010110") 
		  		{
		  			var DL2Message = DL2Message + "V"
		  		}
		  	else if(DL1Segment == "01010111") 
		  		{
		  			var DL2Message = DL2Message + "W"
		  		}
		  	else if(DL1Segment == "01011000") 
		  		{
		  			var DL2Message = DL2Message + "X"
		  		}
		  	else if(DL1Segment == "01011001") 
		  		{
		  			var DL2Message = DL2Message + "Y"
		  		}
		  	else if(DL1Segment == "01011010") 
		  		{
		  			var DL2Message = DL2Message + "Z"
		  		}
		    else if(DL1Segment == "00110000") 
		  		{
		  			var DL2Message = DL2Message + "0"
		  		}
		  	else if(DL1Segment == "00110001") 
		  		{
		  			var DL2Message = DL2Message + "1"
		  		}
		  	else if(DL1Segment == "00110010") 
		  		{
		  			var DL2Message = DL2Message + "2"
		  		}
		  	else if(DL1Segment == "00110011") 
		  		{
		  			var DL2Message = DL2Message + "3"
		  		}
		  	else if(DL1Segment == "00110100") 
		  		{
		  			var DL2Message = DL2Message + "4"
		  		}
		  	else if(DL1Segment == "00110101") 
		  		{
		  			var DL2Message = DL2Message + "5"
		  		}
		  	else if(DL1Segment == "00110110") 
		  		{
		  			var DL2Message = DL2Message + "6"
		  		}
		  	else if(DL1Segment == "00110111") 
		  		{
		  			var DL2Message = DL2Message + "7"
		  		}
		  	else if(DL1Segment == "00111000") 
		  		{
		  			var DL2Message = DL2Message + "8"
		  		}
		  	else if(DL1Segment == "00111001") 
		  		{
		  			var DL2Message = DL2Message + "9"
		  		}
		  	else if(DL1Segment == "00000000") 
		  		{
		  			var DL2Message = DL2Message + "!"
		  		}
		  	else if(DL1Segment == "01000000") 
		  		{
		  			var DL2Message = DL2Message + "@"
		  		}
		    else if(DL1Segment == "00100011") 
		  		{
		  			var DL2Message = DL2Message + "#"
		  		}
		  	else if(DL1Segment == "00100100") 
		  		{
		  			var DL2Message = DL2Message + "$"
		  		}
		  	else if(DL1Segment == "00100101") 
		  		{
		  			var DL2Message = DL2Message + "%"
		  		}
		  	else if(DL1Segment == "01011110") 
		  		{
		  			var DL2Message = DL2Message + "^"
		  		}
		  	else if(DL1Segment == "00100110") 
		  		{
		  			var DL2Message = DL2Message + "&"
		  		}
		  	else if(DL1Segment == "00101010") 
		  		{
		  			var DL2Message = DL2Message + "*"
		  		}
		  	else if(DL1Segment == "00101000") 
		  		{
		  			var DL2Message = DL2Message + "("
		  		}
		  	else if(DL1Segment == "00101001") 
		  		{
		  			var DL2Message = DL2Message + ")"
		  		}
		  	else if(DL1Segment == "01111011") 
		  		{
		  			var DL2Message = DL2Message + "{"
		  		}
		  	else if(DL1Segment == "01111101") 
		  		{
		  			var DL2Message = DL2Message + "}"
		  		}
		  	else if(DL1Segment == "01011011") 
		  		{
		  			var DL2Message = DL2Message + "["
		  		}
		  	else if(DL1Segment == "01011101") 
		  		{
		  			var DL2Message = DL2Message + "]"
		  		}
		  	else if(DL1Segment == "00101111") 
		  		{
		  			var DL2Message = DL2Message + "/"
		  		}
		  	else if(DL1Segment == "00111100") 
		  		{
		  			var DL2Message = DL2Message + "<"
		  		}
		  	else if(DL1Segment == "00111110") 
		  		{
		  			var DL2Message = DL2Message + ">"
		  		}
		  	else if(DL1Segment == "01111100") 
		  		{
		  			var DL2Message = DL2Message + "|"
		  		}
		  	else if(DL1Segment == "01111110") 
		  		{
		  			var DL2Message = DL2Message + "~"
		  		}
		  	else if(DL1Segment == "00111111") 
		  		{
		  			var DL2Message = DL2Message + "?"
		  		}
		  	else if(DL1Segment == "00100111") 
		  		{
		  			var DL2Message = DL2Message + "'"
		  		}
		  	else if(DL1Segment == "00111011") 
		  		{
		  			var DL2Message = DL2Message + ";"
		  		}
		  	else if(DL1Segment == "00111010") 
		  		{
		  			var DL2Message = DL2Message + ":"
		  		}
		    else if(DL1Segment == "00101110") 
		  		{
		  			var DL2Message = DL2Message + "."
		  		}
		  	else if(DL1Segment == "00101100") 
		  		{
		  			var DL2Message = DL2Message + ","
		  		}
		}
	}
	else if (DLayer1 == "D") 
	{
		var index = 0;

		while(index < D1Length)
		{
			var DL2Message = DL2Message + DL1Message[index];
			var index = index + 2;
		}
	}
	else if (DLayer1 == "R") 
	{
		var index = 0;

		while(index < D1Length)
		{
			if(DL1Message[index] == "A") 
			{
				var DL2Message = DL2Message + "N";
				var index = index + 1;
			}
			else if(DL1Message[index] == "B") 
			{
				var DL2Message = DL2Message + "O"
				var index = index + 1;
			}
			else if(DL1Message[index] == "C") 
			{
				var DL2Message = DL2Message + "P"
				var index = index + 1;
			}
			else if(DL1Message[index] == "D") 
			{
				var DL2Message = DL2Message + "Q"
				var index = index + 1;
			}
			else if(DL1Message[index] == "E") 
			{
				var DL2Message = DL2Message + "R"
				var index = index + 1;
			}
			else if(DL1Message[index] == "F") 
			{
				var DL2Message = DL2Message + "S"
				var index = index + 1;
			}
			else if(DL1Message[index] == "G") 
			{
				var DL2Message = DL2Message + "T"
				var index = index + 1;
			}
			else if(DL1Message[index] == "H") 
			{
				var DL2Message = DL2Message + "U"
				var index = index + 1;
			}
			else if(DL1Message[index] == "I") 
			{
				var DL2Message = DL2Message + "V"
				var index = index + 1;
			}
			else if(DL1Message[index] == "J") 
			{
				var DL2Message = DL2Message + "W"
				var index = index + 1;
			}
			else if(DL1Message[index] == "K") 
			{
				var DL2Message = DL2Message + "X"
				var index = index + 1;
			}
			else if(DL1Message[index] == "L") 
			{
				var DL2Message = DL2Message + "Y"
				var index = index + 1;
			}
			else if(DL1Message[index] == "M") 
			{
				var DL2Message = DL2Message + "Z"
				var index = index + 1;
			}
			else if(DL1Message[index] == "N") 
			{
				var DL2Message = DL2Message + "A"
				var index = index + 1;
			}
			else if(DL1Message[index] == "O") 
			{
				var DL2Message = DL2Message + "B"
				var index = index + 1;
			}
			else if(DL1Message[index] == "P") 
			{
				var DL2Message = DL2Message + "C"
				var index = index + 1;
			}
			else if(DL1Message[index] == "Q") 
			{
				var DL2Message = DL2Message + "D"
				var index = index + 1;
			}
			else if(DL1Message[index] == "R") 
			{
				var DL2Message = DL2Message + "E"
				var index = index + 1;
			}
			else if(DL1Message[index] == "S") 
			{
				var DL2Message = DL2Message + "F"
				var index = index + 1;
			}
			else if(DL1Message[index] == "T") 
			{
				var DL2Message = DL2Message + "G"
				var index = index + 1;
			}
			else if(DL1Message[index] == "U") 
			{
				var DL2Message = DL2Message + "H"
				var index = index + 1;
			}
			else if(DL1Message[index] == "V") 
			{
				var DL2Message = DL2Message + "I"
				var index = index + 1;
			}
			else if(DL1Message[index] == "W") 
			{
				var DL2Message = DL2Message + "J"
				var index = index + 1;
			}
			else if(DL1Message[index] == "X") 
			{
				var DL2Message = DL2Message + "K"
				var index = index + 1;
			}
			else if(DL1Message[index] == "Y") 
			{
				var DL2Message = DL2Message + "L"
				var index = index + 1;
			}
			else if(DL1Message[index] == "Z") 
			{
				var DL2Message = DL2Message + "M"
				var index = index + 1;
			}
			else if(DL1Message[index] == "0") 
			{
				var DL2Message = DL2Message + "5"
				var index = index + 1;
			}
			else if(DL1Message[index] == "1") 
			{
				var DL2Message = DL2Message + "6"
				var index = index + 1;
			}
			else if(DL1Message[index] == "2") 
			{
				var DL2Message = DL2Message + "7"
				var index = index + 1;
			}
			else if(DL1Message[index] == "3") 
			{
				var DL2Message = DL2Message + "8"
				var index = index + 1;
			}
			else if(DL1Message[index] == "4") 
			{
				var DL2Message = DL2Message + "9"
				var index = index + 1;
			}
			else if(DL1Message[index] == "5") 
			{
				var DL2Message = DL2Message + "0"
				var index = index + 1;
			}
			else if(DL1Message[index] == "6") 
			{
				var DL2Message = DL2Message + "1"
				var index = index + 1;
			}
			else if(DL1Message[index] == "7") 
			{
				var DL2Message = DL2Message + "2"
				var index = index + 1;
			}
			else if(DL1Message[index] == "8") 
			{
				var DL2Message = DL2Message + "3"
				var index = index + 1;
			}
			else if(DL1Message[index] == "9") 
			{
				var DL2Message = DL2Message + "4"
				var index = index + 1;
			}
			else if(DL1Message[index] == "!") 
			{
				var DL2Message = DL2Message + "!"
				var index = index + 1;
			}
			else if(DL1Message[index] == "@") 
			{
				var DL2Message = DL2Message + "@"
				var index = index + 1;
			}
			else if(DL1Message[index] == "#") 
			{
				var DL2Message = DL2Message + "#"
				var index = index + 1;
			}
			else if(DL1Message[index] == "$") 
			{
				var DL2Message = DL2Message + "$"
				var index = index + 1;
			}
			else if(DL1Message[index] == "%") 
			{
				var DL2Message = DL2Message + "%"
				var index = index + 1;
			}
			else if(DL1Message[index] == "^") 
			{
				var DL2Message = DL2Message + "^"
				var index = index + 1;
			}
			else if(DL1Message[index] == "&") 
			{
				var DL2Message = DL2Message + "&"
				var index = index + 1;
			}
			else if(DL1Message[index] == "*") 
			{
				var DL2Message = DL2Message + "*"
				var index = index + 1;
			}
			else if(DL1Message[index] == "(") 
			{
				var DL2Message = DL2Message + "("
				var index = index + 1;
			}
			else if(DL1Message[index] == ")") 
			{
				var DL2Message = DL2Message + ")"
				var index = index + 1;
			}
			else if(DL1Message[index] == "{") 
			{
				var DL2Message = DL2Message + "{"
				var index = index + 1;
			}
			else if(DL1Message[index] == "}") 
			{
				var DL2Message = DL2Message + "}"
				var index = index + 1;
			}
			else if(DL1Message[index] == "[") 
			{
				var DL2Message = DL2Message + "["
				var index = index + 1;
			}
			else if(DL1Message[index] == "]") 
			{
				var DL2Message = DL2Message + "]"
				var index = index + 1;
			}
			else if(DL1Message[index] == "/") 
			{
				var DL2Message = DL2Message + "/"
				var index = index + 1;
			}
			else if(DL1Message[index] == "<") 
			{
				var DL2Message = DL2Message + "<"
				var index = index + 1;
			}
			else if(DL1Message[index] == ">") 
			{
				var DL2Message = DL2Message + ">"
				var index = index + 1;
			}
			else if(DL1Message[index] == "|") 
			{
				var DL2Message = DL2Message + "|"
				var index = index + 1;
			}
			else if(DL1Message[index] == "~") 
			{
				var DL2Message = DL2Message + "~"
				var index = index + 1;
			}
			else if(DL1Message[index] == "?") 
			{
				var DL2Message = DL2Message + "?"
				var index = index + 1;
			}
			else if(DL1Message[index] == "'") 
			{
				var DL2Message = DL2Message + "'"
				var index = index + 1;
			}
			else if(DL1Message[index] == ";") 
			{
				var DL2Message = DL2Message + ";"
				var index = index + 1;
			}
			else if(DL1Message[index] == ":") 
			{
				var DL2Message = DL2Message + ":"
				var index = index + 1;
			}
			else if(DL1Message[index] == ".") 
			{
				var DL2Message = DL2Message + "."
				var index = index + 1;
			}
			else if(DL1Message[index] == ",") 
			{
				var DL2Message = DL2Message + ","
				var index = index + 1;
			}
		}
	}

	var index = 0;
	var D2Length = DL2Message.length;
	var DL3Message = "";
	var count = 0;
	var DL2Segment = "";
	var Rcount = D2Length - 1;

	if (DLayer2 == "M") 
	{
		while(index < D2Length)
		{
			if (DL2Message[index] == "@") 
			{
				var DL3Message = DL3Message + "A";
				var index = index + 1;
			}
			else if (DL2Message[index] == "#")
			{
				var DL3Message = DL3Message + "B";
				var index = index + 1;
			}
			else if (DL2Message[index] == "$")
			{
				var DL3Message = DL3Message + "C";
				var index = index + 1;
			}
			else if (DL2Message[index] == "%")
			{
				var DL3Message = DL3Message + "D";
				var index = index + 1;
			}
			else if (DL2Message[index] == "^")
			{
				var DL3Message = DL3Message + "E";
				var index = index + 1;
			}
			else if (DL2Message[index] == "&")
			{
				var DL3Message = DL3Message + "F";
				var index = index + 1;
			}
			else if (DL2Message[index] == "*")
			{
				var DL3Message = DL3Message + "G";
				var index = index + 1;
			}
			else if (DL2Message[index] == "(")
			{
				var DL3Message = DL3Message + "H";
				var index = index + 1;
			}
			else if (DL2Message[index] == ")")
			{
				var DL3Message = DL3Message + "I";
				var index = index + 1;
			}
			else if (DL2Message[index] == "{")
			{
				var DL3Message = DL3Message + "J";
				var index = index + 1;
			}
			else if (DL2Message[index] == "}")
			{
				var DL3Message = DL3Message + "K";
				var index = index + 1;
			}
			else if (DL2Message[index] == "[")
			{
				var DL3Message = DL3Message + "L";
				var index = index + 1;
			}
			else if (DL2Message[index] == "]")
			{
				var DL3Message = DL3Message + "M";
				var index = index + 1;
			}
			else if (DL2Message[index] == "/")
			{
				var DL3Message = DL3Message + "N";
				var index = index + 1;
			}
			else if (DL2Message[index] == "<")
			{
				var DL3Message = DL3Message + "O";
				var index = index + 1;
			}
			else if (DL2Message[index] == ">")
			{
				var DL3Message = DL3Message + "P";
				var index = index + 1;
			}
			else if (DL2Message[index] == "|")
			{
				var DL3Message = DL3Message + "Q";
				var index = index + 1;
			}
			else if (DL2Message[index] == "~")
			{
				var DL3Message = DL3Message + "R";
				var index = index + 1;
			}
			else if (DL2Message[index] == "?")
			{
				var DL3Message = DL3Message + "S";
				var index = index + 1;
			}
			else if (DL2Message[index] == "'")
			{
				var DL3Message = DL3Message + "T";
				var index = index + 1;
			}
			else if (DL2Message[index] == ";")
			{
				var DL3Message = DL3Message + "U";
				var index = index + 1;
			}
			else if (DL2Message[index] == ":")
			{
				var DL3Message = DL3Message + "V";
				var index = index + 1;
			}
			else if (DL2Message[index] == ".")
			{
				var DL3Message = DL3Message + "W";
				var index = index + 1;
			}
			else if (DL2Message[index] == ",")
			{
				var DL3Message = DL3Message + "X";
				var index = index + 1;
			}
			else if (DL2Message[index] == "K")
			{
				var DL3Message = DL3Message + "Y";
				var index = index + 1;
			}
			else if (DL2Message[index] == "L")
			{
				var DL3Message = DL3Message + "Z";
				var index = index + 1;
			}
			else if (DL2Message[index] == "B")
			{
				var DL3Message = DL3Message + "1";
				var index = index + 1;
			}
			else if (DL2Message[index] == "C")
			{
				var DL3Message = DL3Message + "2";
				var index = index + 1;
			}
			else if (DL2Message[index] == "D")
			{
				var DL3Message = DL3Message + "3";
				var index = index + 1;
			}
			else if (DL2Message[index] == "E")
			{
				var DL3Message = DL3Message + "4";
				var index = index + 1;
			}
			else if (DL2Message[index] == "F")
			{
				var DL3Message = DL3Message + "5";
				var index = index + 1;
			}
			else if (DL2Message[index] == "G")
			{
				var DL3Message = DL3Message + "6";
				var index = index + 1;
			}
			else if (DL2Message[index] == "H")
			{
				var DL3Message = DL3Message + "7";
				var index = index + 1;
			}
			else if (DL2Message[index] == "I")
			{
				var DL3Message = DL3Message + "8";
				var index = index + 1;
			}
			else if (DL2Message[index] == "J")
			{
				var DL3Message = DL3Message + "9";
				var index = index + 1;
			}
			else if (DL2Message[index] == "A")
			{
				var DL3Message = DL3Message + "0";
				var index = index + 1;
			}
			else if (DL2Message[index] == "!")
			{
				var DL3Message = DL3Message + "!";
				var index = index + 1;
			}
		}
	}
	else if (DLayer2 == "H") 
	{
		while(index < D2Length)
		{
			var count = count + 2;
			var index = count - 2;
			var DL2Segment = "";

			while(index < count)
			{
				var DL2Segment = DL2Segment + DL2Message[index]
				var index = index + 1;
			}

			if(DL2Segment == "41") 
		  		{
		  			var DL3Message = DL3Message + "A"
		  		}
		  	else if(DL2Segment == "42") 
		  		{
		  			var DL3Message = DL3Message + "B"
		  		}
		  	else if(DL2Segment == "43") 
		  		{
		  			var DL3Message = DL3Message + "C"
		  		}
		  	else if(DL2Segment == "44") 
		  		{
		  			var DL3Message = DL3Message + "D"
		  		}
		    else if(DL2Segment == "45") 
		  		{
		  			var DL3Message = DL3Message + "E"
		  		}
		  	else if(DL2Segment == "46") 
		  		{
		  			var DL3Message = DL3Message + "F"
		  		}
		  	else if(DL2Segment == "47") 
		  		{
		  			var DL3Message = DL3Message + "G"
		  		}
		  	else if(DL2Segment == "48") 
		  		{
		  			var DL3Message = DL3Message + "H"
		  		}
		    else if(DL2Segment == "49") 
		  		{
		  			var DL3Message = DL3Message + "I"
		  		}
		  	else if(DL2Segment == "4A") 
		  		{
		  			var DL3Message = DL3Message + "J"
		  		}
		  	else if(DL2Segment == "4B") 
		  		{
		  			var DL3Message = DL3Message + "K"
		  		}
		  	else if(DL2Segment == "4C") 
		  		{
		  			var DL3Message = DL3Message + "L"
		  		}
		    else if(DL2Segment == "4D") 
		  		{
		  			var DL3Message = DL3Message + "M"
		  		}
		  	else if(DL2Segment == "4E") 
		  		{
		  			var DL3Message = DL3Message + "N"
		  		}
		  	else if(DL2Segment == "4F") 
		  		{
		  			var DL3Message = DL3Message + "O"
		  		}
		  	else if(DL2Segment == "50") 
		  		{
		  			var DL3Message = DL3Message + "P"
		  		}
		    else if(DL2Segment == "51") 
		  		{
		  			var DL3Message = DL3Message + "Q"
		  		}
		  	else if(DL2Segment == "52") 
		  		{
		  			var DL3Message = DL3Message + "R"
		  		}
		  	else if(DL2Segment == "53") 
		  		{
		  			var DL3Message = DL3Message + "S"
		  		}
		  	else if(DL2Segment == "54") 
		  		{
		  			var DL3Message = DL3Message + "T"
		  		}
		    else if(DL2Segment == "55") 
		  		{
		  			var DL3Message = DL3Message + "U"
		  		}
		  	else if(DL2Segment == "56") 
		  		{
		  			var DL3Message = DL3Message + "V"
		  		}
		  	else if(DL2Segment == "57") 
		  		{
		  			var DL3Message = DL3Message + "W"
		  		}
		  	else if(DL2Segment == "58") 
		  		{
		  			var DL3Message = DL3Message + "X"
		  		}
		    else if(DL2Segment == "59") 
		  		{
		  			var DL3Message = DL3Message + "Y"
		  		}
		  	else if(DL2Segment == "5A") 
		  		{
		  			var DL3Message = DL3Message + "Z"
		  		}
		  	else if(DL2Segment == "1Z") 
		  		{
		  			var DL3Message = DL3Message + "1"
		  		}
		  	else if(DL2Segment == "2Z") 
		  		{
		  			var DL3Message = DL3Message + "2"
		  		}
		    else if(DL2Segment == "3Z") 
		  		{
		  			var DL3Message = DL3Message + "3"
		  		}
		  	else if(DL2Segment == "4Z") 
		  		{
		  			var DL3Message = DL3Message + "4"
		  		}
		  	else if(DL2Segment == "5Z") 
		  		{
		  			var DL3Message = DL3Message + "5"
		  		}
		  	else if(DL2Segment == "6Z") 
		  		{
		  			var DL3Message = DL3Message + "6"
		  		}
		    else if(DL2Segment == "7Z") 
		  		{
		  			var DL3Message = DL3Message + "7"
		  		}
		  	else if(DL2Segment == "8Z") 
		  		{
		  			var DL3Message = DL3Message + "8"
		  		}
		  	else if(DL2Segment == "9Z") 
		  		{
		  			var DL3Message = DL3Message + "9"
		  		}
		  	else if(DL2Segment == "0Z") 
		  		{
		  			var DL3Message = DL3Message + "0"
		  		}
		    else if(DL2Segment == "!Z") 
		  		{
		  			var DL3Message = DL3Message + "!"
		  		}
		}
	}
	else if (DLayer2 == "F") 
	{
		while (index <= Rcount) 
  		{
  			var DL3Message = DL3Message + DL2Message[Rcount];
  			var Rcount = Rcount - 1;
  		}
	}

	var index = 0;
	var D3Length = DL3Message.length;
	var DL4Message = "";
	var count = 0;
	var DL3Segment = "";
	var Rcount = D3Length - 1;

	if (DLayer3 == "R") 
	{
		var index = 0;

		while(index < D3Length)
		{
			if(DL3Message[index] == "A") 
			{
				var DL4Message = DL4Message + "N";
				var index = index + 1;
			}
			else if(DL3Message[index] == "B") 
			{
				var DL4Message = DL4Message + "O"
				var index = index + 1;
			}
			else if(DL3Message[index] == "C") 
			{
				var DL4Message = DL4Message + "P"
				var index = index + 1;
			}
			else if(DL3Message[index] == "D") 
			{
				var DL4Message = DL4Message + "Q"
				var index = index + 1;
			}
			else if(DL3Message[index] == "E") 
			{
				var DL4Message = DL4Message + "R"
				var index = index + 1;
			}
			else if(DL3Message[index] == "F") 
			{
				var DL4Message = DL4Message + "S"
				var index = index + 1;
			}
			else if(DL3Message[index] == "G") 
			{
				var DL4Message = DL4Message + "T"
				var index = index + 1;
			}
			else if(DL3Message[index] == "H") 
			{
				var DL4Message = DL4Message + "U"
				var index = index + 1;
			}
			else if(DL3Message[index] == "I") 
			{
				var DL4Message = DL4Message + "V"
				var index = index + 1;
			}
			else if(DL3Message[index] == "J") 
			{
				var DL4Message = DL4Message + "W"
				var index = index + 1;
			}
			else if(DL3Message[index] == "K") 
			{
				var DL4Message = DL4Message + "X"
				var index = index + 1;
			}
			else if(DL3Message[index] == "L") 
			{
				var DL4Message = DL4Message + "Y"
				var index = index + 1;
			}
			else if(DL3Message[index] == "M") 
			{
				var DL4Message = DL4Message + "Z"
				var index = index + 1;
			}
			else if(DL3Message[index] == "N") 
			{
				var DL4Message = DL4Message + "A"
				var index = index + 1;
			}
			else if(DL3Message[index] == "O") 
			{
				var DL4Message = DL4Message + "B"
				var index = index + 1;
			}
			else if(DL3Message[index] == "P") 
			{
				var DL4Message = DL4Message + "C"
				var index = index + 1;
			}
			else if(DL3Message[index] == "Q") 
			{
				var DL4Message = DL4Message + "D"
				var index = index + 1;
			}
			else if(DL3Message[index] == "R") 
			{
				var DL4Message = DL4Message + "E"
				var index = index + 1;
			}
			else if(DL3Message[index] == "S") 
			{
				var DL4Message = DL4Message + "F"
				var index = index + 1;
			}
			else if(DL3Message[index] == "T") 
			{
				var DL4Message = DL4Message + "G"
				var index = index + 1;
			}
			else if(DL3Message[index] == "U") 
			{
				var DL4Message = DL4Message + "H"
				var index = index + 1;
			}
			else if(DL3Message[index] == "V") 
			{
				var DL4Message = DL4Message + "I"
				var index = index + 1;
			}
			else if(DL3Message[index] == "W") 
			{
				var DL4Message = DL4Message + "J"
				var index = index + 1;
			}
			else if(DL3Message[index] == "X") 
			{
				var DL4Message = DL4Message + "K"
				var index = index + 1;
			}
			else if(DL3Message[index] == "Y") 
			{
				var DL4Message = DL4Message + "L"
				var index = index + 1;
			}
			else if(DL3Message[index] == "Z") 
			{
				var DL4Message = DL4Message + "M"
				var index = index + 1;
			}
			else if(DL3Message[index] == "0") 
			{
				var DL4Message = DL4Message + "5"
				var index = index + 1;
			}
			else if(DL3Message[index] == "1") 
			{
				var DL4Message = DL4Message + "6"
				var index = index + 1;
			}
			else if(DL3Message[index] == "2") 
			{
				var DL4Message = DL4Message + "7"
				var index = index + 1;
			}
			else if(DL3Message[index] == "3") 
			{
				var DL4Message = DL4Message + "8"
				var index = index + 1;
			}
			else if(DL3Message[index] == "4") 
			{
				var DL4Message = DL4Message + "9"
				var index = index + 1;
			}
			else if(DL3Message[index] == "5") 
			{
				var DL4Message = DL4Message + "0"
				var index = index + 1;
			}
			else if(DL3Message[index] == "6") 
			{
				var DL4Message = DL4Message + "1"
				var index = index + 1;
			}
			else if(DL3Message[index] == "7") 
			{
				var DL4Message = DL4Message + "2"
				var index = index + 1;
			}
			else if(DL3Message[index] == "8") 
			{
				var DL4Message = DL4Message + "3"
				var index = index + 1;
			}
			else if(DL3Message[index] == "9") 
			{
				var DL4Message = DL4Message + "4"
				var index = index + 1;
			}
			else if(DL3Message[index] == "!") 
			{
				var DL4Message = DL4Message + " "
				var index = index + 1;
			}
		}
	}
	else if (DLayer3 == "H")
	{
		while(index < D3Length)
		{
			var count = count + 2;
			var index = count - 2;
			var DL3Segment = "";

			while(index < count)
			{
				var DL3Segment = DL3Segment + DL3Message[index]
				var index = index + 1;
			}

			if(DL3Segment == "41") 
		  		{
		  			var DL4Message = DL4Message + "A"
		  		}
		  	else if(DL3Segment == "42") 
		  		{
		  			var DL4Message = DL4Message + "B"
		  		}
		  	else if(DL3Segment == "43") 
		  		{
		  			var DL4Message = DL4Message + "C"
		  		}
		  	else if(DL3Segment == "44") 
		  		{
		  			var DL4Message = DL4Message + "D"
		  		}
		    else if(DL3Segment == "45") 
		  		{
		  			var DL4Message = DL4Message + "E"
		  		}
		  	else if(DL3Segment == "46") 
		  		{
		  			var DL4Message = DL4Message + "F"
		  		}
		  	else if(DL3Segment == "47") 
		  		{
		  			var DL4Message = DL4Message + "G"
		  		}
		  	else if(DL3Segment == "48") 
		  		{
		  			var DL4Message = DL4Message + "H"
		  		}
		    else if(DL3Segment == "49") 
		  		{
		  			var DL4Message = DL4Message + "I"
		  		}
		  	else if(DL3Segment == "4A") 
		  		{
		  			var DL4Message = DL4Message + "J"
		  		}
		  	else if(DL3Segment == "4B") 
		  		{
		  			var DL4Message = DL4Message + "K"
		  		}
		  	else if(DL3Segment == "4C") 
		  		{
		  			var DL4Message = DL4Message + "L"
		  		}
		    else if(DL3Segment == "4D") 
		  		{
		  			var DL4Message = DL4Message + "M"
		  		}
		  	else if(DL3Segment == "4E") 
		  		{
		  			var DL4Message = DL4Message + "N"
		  		}
		  	else if(DL3Segment == "4F") 
		  		{
		  			var DL4Message = DL4Message + "O"
		  		}
		  	else if(DL3Segment == "50") 
		  		{
		  			var DL4Message = DL4Message + "P"
		  		}
		    else if(DL3Segment == "51") 
		  		{
		  			var DL4Message = DL4Message + "Q"
		  		}
		  	else if(DL3Segment == "52") 
		  		{
		  			var DL4Message = DL4Message + "R"
		  		}
		  	else if(DL3Segment == "53") 
		  		{
		  			var DL4Message = DL4Message + "S"
		  		}
		  	else if(DL3Segment == "54") 
		  		{
		  			var DL4Message = DL4Message + "T"
		  		}
		    else if(DL3Segment == "55") 
		  		{
		  			var DL4Message = DL4Message + "U"
		  		}
		  	else if(DL3Segment == "56") 
		  		{
		  			var DL4Message = DL4Message + "V"
		  		}
		  	else if(DL3Segment == "57") 
		  		{
		  			var DL4Message = DL4Message + "W"
		  		}
		  	else if(DL3Segment == "58") 
		  		{
		  			var DL4Message = DL4Message + "X"
		  		}
		    else if(DL3Segment == "59") 
		  		{
		  			var DL4Message = DL4Message + "Y"
		  		}
		  	else if(DL3Segment == "5A") 
		  		{
		  			var DL4Message = DL4Message + "Z"
		  		}
		  	else if(DL3Segment == "1Z") 
		  		{
		  			var DL4Message = DL4Message + "1"
		  		}
		  	else if(DL3Segment == "2Z") 
		  		{
		  			var DL4Message = DL4Message + "2"
		  		}
		    else if(DL3Segment == "3Z") 
		  		{
		  			var DL4Message = DL4Message + "3"
		  		}
		  	else if(DL3Segment == "4Z") 
		  		{
		  			var DL4Message = DL4Message + "4"
		  		}
		  	else if(DL3Segment == "5Z") 
		  		{
		  			var DL4Message = DL4Message + "5"
		  		}
		  	else if(DL3Segment == "6Z") 
		  		{
		  			var DL4Message = DL4Message + "6"
		  		}
		    else if(DL3Segment == "7Z") 
		  		{
		  			var DL4Message = DL4Message + "7"
		  		}
		  	else if(DL3Segment == "8Z") 
		  		{
		  			var DL4Message = DL4Message + "8"
		  		}
		  	else if(DL3Segment == "9Z") 
		  		{
		  			var DL4Message = DL4Message + "9"
		  		}
		  	else if(DL3Segment == "0Z") 
		  		{
		  			var DL4Message = DL4Message + "0"
		  		}
		    else if(DL3Segment == "!Z") 
		  		{
		  			var DL4Message = DL4Message + " "
		  		}
		}
	}
	else if (DLayer3 == "F") 
	{
		while (index <= Rcount) 
  		{
  			if (DL3Message[Rcount] == "!") 
  			{
  				var DL4Message = DL4Message + " ";
  				var Rcount = Rcount - 1;
  			}
  			else
  			{
  				var DL4Message = DL4Message + DL3Message[Rcount];
  				var Rcount = Rcount - 1;
  			}
  		}
	}

	document.getElementById("DDMessage").innerHTML = DL4Message;
}