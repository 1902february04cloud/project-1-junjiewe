import boto3

dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1')

#Need to define: Partition and Sort Key
def create_Schema(event, context):
    table = dynamodb.create_table(
        TableName = 'Laptop',
        KeySchema = [
            {
                #Partition Key
                'AttributeName' : "Laptop_Brand",
                'KeyType' : 'HASH'
            },
            {
                #Sort Key
                'AttributeName' : 'Laptop_Name',
                'KeyType' : 'RANGE'
            }
        ],

        AttributeDefinitions = [
            {
                'AttributeName' : "Laptop_Brand",
                'AttributeType' : 'S'
            },
            {
                'AttributeName' : "Laptop_Name",
                'AttributeType' : 'S'
            }
        ],

        #performance, defined in Units(record) per second
        ProvisionedThroughput = {
            'ReadCapacityUnits' : 5,
            'WriteCapacityUnits' : 5
        } 
    )

    return 'Table created successfully'
