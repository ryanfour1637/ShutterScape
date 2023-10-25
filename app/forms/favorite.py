from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError

class FavoriteForm(FlaskForm):
    post_id = IntegerField("Post Id", validators=[DataRequired()])
    submit = SubmitField("Submit")
