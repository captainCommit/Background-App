import firebase from './firebase';

export async function getElements(){
    //firebase.initializeApp(config)
    const db = firebase.firestore()
    const snapShot = await db.collection('Images').get()
    //console.log(snapShot)
    return snapShot.docs.map(docs => docs.data())
}

export default async function selectForDisplay()
{
    try{
    var arr = await getElements();
    var randoms = [...Array(10)].map(() => Math.floor(Math.random() * arr.length));
    var result = []
    for(var i = 0;i<randoms.length;i++)
        result.push(arr[randoms[i]])
    return result
    }
    catch(err){
        return null
    }
}
export function applyRating(ratingArray)
{
    var RatingListFinal = []
    for(var e in ratingArray)
    {
        var i = RatingListFinal.findIndex(o => o.name === ratingArray[e].name)
        if(i >= 0)
        {
            RatingListFinal[i].averageRating = ((RatingListFinal[i].averageRating*RatingListFinal[i].count + ratingArray[e].value)/(RatingListFinal[i].count+1)).toFixed(2)
            RatingListFinal[i].count = RatingListFinal[i].count+1
        }
        else{
            RatingListFinal.push({name : ratingArray[e].name,count : 1,averageRating : ratingArray[e].value})
        }

    }
    return RatingListFinal
}
