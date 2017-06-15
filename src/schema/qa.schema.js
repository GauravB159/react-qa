export default {
  "type": "object",
  "required": [
    "question",
    "answer"
  ],
  "properties": {
    "question": {
      "type": "string",
      "title": "Question",
      "minLength": 10,
      "maxLength": 12
    },
    "answer": {
      "type": "string",
      "title": "Answer",
      "minLength": 10,
      "maxLength": 100
    }
  }
}