# Workshop Test: Meal planing

## Meal Entity
- date (PK, Partition Key)
  - yyyy-mm-dd
- sortKey (PK, Sort Key)
  - `${userName}#${type}#${randomNumber}`
- userName
- type
  - breakfast
  - lunch
  - dinner
- preparation
  - vegan
  - meat
- size
  - small
  - medium
  - large

## API Endpoints
`[POST] /meal`

**Request payload format:**
```json
{
  "userName": "John Doe",
  "type": "breakfast",
  "preparation": "vegan",
  "size": "small"
}
```
**Response format:**
```json
{
  "response": {
    "type": "success",
    "message": "Meal plan successfully created. Meal plan ID: 123"
  }
}
```
---

`[GET] /meals?date=${yyyy-mm-dd}`

**Response format:**
```json
{
  "response": {
    "type": "success",
    "data": {
      "date": "${yyyy-mm-dd}",
      "meals": [
        {
          // meal attributes
        },
        {
          // meal attributes
        }
      ]
    }
  }
}
```

