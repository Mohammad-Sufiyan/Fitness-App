
var axios=require('axios').default;

exports.dietPlan = async(req,res,next)=> {
    var options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
        params: {
          timeFrame: 'day',
          targetCalories: '2000',
          diet: 'vegetarian',
          exclude: 'shellfish, olives'
        },
        headers: {
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': '8c42c29d8emsheb36ed861b2725dp1899d6jsnbe25df399291'
        }
      };
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.status(200).send({status:200,dietData:response.data})
      }).catch(function (error) {
          console.error(error);
      });
}