import express from 'express';

// import our newly created `Question` model.
import {Question} from '../models/question.js';

const router = express.Router();

router.get('/', (req, res) => {
    // use the `find` function provided by mongoose to find all questions.
    Question.find()
        // the return value of the `find` function is all found questions, let's send that list back in our response as JSON.
        .then(questions => res.json(questions))
            .catch(err => res.status(404).json(err));
});

router.post('/', (req, res) => {
    // our http request (`req`) brought with it the `body` of the question we are asking. we use the values in this object to construct a new Question.
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content,
    });
    // we then `save` this question and, if successful, return it with our response.
    newQuestion.save().then(question => res.json(question))
        .catch(err => res.status(404).json(err));
    
});

router.delete('/:question_id', (req, res) => {
    // for our delete function, we will simply pass the id of the `question` we want to remove as part of the parameters to our URI. we then find and delete the matching question in our database.
    Question.findOneAndDelete({_id: req.params.question_id})
        //what we do next is up to us, i've decided to return the id of the question as a confirmation.
        .then(question => res.json({_id: question._id}))
            .catch(err => res.status(404).json(err));
});

export const questions = router;

