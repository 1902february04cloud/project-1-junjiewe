import logging
import calulator
import util

logger = logging.getLogger()

def calculating(event, context):
    try:
        n1 = float(event['number'])
        n2 = float(event['number'])
        operation = event['operation']
    except ValueError:
        logger.error('Input number is not a number.')
        return util.jsonify('Please input a number.')

    return calulator.calcResult(n1,n2,operation)