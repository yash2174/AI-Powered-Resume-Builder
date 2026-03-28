import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  data: { type: Object, required: true },
  style: { type: Object, required: true },
});

export default mongoose.model('Resume', ResumeSchema);
