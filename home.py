from flask import Blueprint, render_template, session,abort, Response
from pykafka import KafkaClient

def get_kafka_client():
    return KafkaClient(hosts='127.0.0.1:9092')

app_file1= Blueprint('app_file1',__name__)

# @app_file1 is the decorator
# Route URL 
@app_file1.route("/")
def home():
    return render_template('index.html',token="Hello Flask+react")


# Kafka Consumer API
@app_file1.route('/topic/<topicname>')
def get_messages(topicname):
    client = get_kafka_client()
    def events():
        for i in client.topics[topicname].get_simple_consumer():
            yield 'data:{0}\n\n'.format(i.value.decode())
    return Response(events(), mimetype="text/event-stream")

if __name__ == '__main__':
    #app_file1.run(host="0.0.0.0")
    app_file1.run(debug=True, use_reloader=False)
