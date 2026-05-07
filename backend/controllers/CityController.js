import FavoriteCity from '../models/FavoriteCity'


const createFavoriteCity = async(req,res)=>{
    try {
        const {city} = req.body;
        const userId = req.body.id;
        if(!city){
            return res.status(401).json({message : 'please choose any city '})
        }
        const exists = await FavoriteCity.findOne({user : userId ,city : city}) ;
        if(exists){
             return res.status(400).json({ message: "City already added" });
        }
        const newCity = await FavoriteCity.create({user : userId , city});
         return res.status(201).json({ message: "Favorite city added",data: newCity });
    } catch (error) {
        console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
    
}



const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const deletedCity = await FavoriteCity.findOneAndDelete({
      _id: id,
      user: userId
    });
    if (!deletedCity) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.status(200).json({
      message: "Favorite city deleted"
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};