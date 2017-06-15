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
      "maxLength": 12,
      "displayLabel": false
    },
    "answer": {
      "type": "string",
      "title": "Answer",
      "minLength": 10,
      "maxLength": 100,
      "displayLabel": false
    }
  }
}