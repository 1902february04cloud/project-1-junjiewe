import boto3

dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1')

def get(event, context):
    table = dynamodb.Table('Laptop')

    data = table.scan()

    print(data)

    laptop = data['Items']

    return laptop