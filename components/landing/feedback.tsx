import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Meh, Frown, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const MoodEmoji = ({ emoji: Emoji, mood, selected, onClick }:any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`p-2 rounded-full ${selected ? 'bg-white' : 'bg-gray-200'}`}
    onClick={() => onClick(mood)}
  >
    <Emoji size={40} className={selected ? 'text-yellow-500' : 'text-gray-500'} />
  </motion.button>
);

const Confetti = () => (
  <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-full h-full max-w-lg max-h-lg">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          initial={{ 
            x: "50%", 
            y: "50%", 
            scale: 0 
          }}
          animate={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop", 
            delay: Math.random() * 2 
          }}
        />
      ))}
    </div>
  </div>
);

const Feedback = () => {
  const [mood, setMood] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const videoRef = useRef(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({ mood, comment });
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && videoRef.current) {
        // @ts-ignore
      videoRef.current.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    }
  }, [isSubmitted]);

  const moodColors = {
    happy: "bg-yellow-300",
    neutral: "bg-blue-300",
    sad: "bg-purple-300",
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
      >
        <Card className="w-full max-w-md text-center p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h2 className="text-2xl font-bold mb-4">Thank you for your feedback!</h2>
            <p className="text-lg mb-4">We appreciate your input.</p>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                title="Thank you video"
                playsInline
                loop = {true}
              >
                <source src="/done_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </Card>
        <Confetti />
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`flex items-center justify-center min-h-screen transition-colors duration-500 ${mood ? moodColors[mood] : 'bg-gray-100'}`}
    >
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">How was your experience?</h2>
          <div className="flex justify-around mb-6">
            <MoodEmoji emoji={Smile} mood="happy" selected={mood === 'happy'} onClick={setMood} />
            <MoodEmoji emoji={Meh} mood="neutral" selected={mood === 'neutral'} onClick={setMood} />
            <MoodEmoji emoji={Frown} mood="sad" selected={mood === 'sad'} onClick={setMood} />
          </div>
          <AnimatePresence>
            {mood && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Textarea
                  placeholder="Tell us more about your experience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mb-4"
                />
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Feedback
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Feedback;