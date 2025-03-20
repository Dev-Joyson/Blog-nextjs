import { Schema , model, models} from "mongoose";
import { title } from "process";

const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
}, {toJSON: {virtuals: true}});

postSchema.virtual('short_description').get(function() {
    return this.description.substr(0,50)+'...'
})

const PostModel = models.POST || model('Post', postSchema);

export default PostModel;
