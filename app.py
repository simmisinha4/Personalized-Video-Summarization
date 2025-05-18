from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Route for Home Page
@app.route('/')
def home():
    return render_template('home.html')

# Route for Highlights Page
@app.route('/highlights')
def highlights():
    return render_template('highlights.html')

# Route for Output Page
@app.route('/output')
def output():
    return render_template('output.html')

# Serve uploaded videos
@app.route('/uploaded_videos/<filename>')
def uploaded_video(filename):
    return send_from_directory('uploaded_videos', filename)

# Serve output videos
@app.route('/output_videos/<filename>')
def output_video(filename):
    return send_from_directory('output_videos', filename)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
