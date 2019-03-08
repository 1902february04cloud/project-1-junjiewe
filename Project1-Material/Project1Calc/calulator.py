import math

#calculate user's input

def calcResult(firstnum,secnum, operation):
    if operation == '+':
        return float(firstnum) + float(secnum)
    elif operation == '-':
        return float(firstnum) - float(secnum)
    elif operation == '*':
        return float(firstnum) * float(secnum)
    elif operation == '/':
        return float(firstnum) / float(secnum)
    elif operation == '%':
        return float(firstnum) % float(secnum)
    elif operation == '^':
        return math.pow(float(firstnum), float(secnum))    
    else:
        print("Sorry can't handle that operation: {}".format(operation))   
