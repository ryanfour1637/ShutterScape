from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError

class AlbumForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    submit = SubmitField("Submit")
