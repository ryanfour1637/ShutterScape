from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class CommentForm(FlaskForm):
    comment = TextAreaField("Title", validators=[DataRequired()])
    submit = SubmitField("Submit")
