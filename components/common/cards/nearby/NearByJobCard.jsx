import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./nearbyjobcard.style";
import { checkForImage } from "../../../../utils";

const NearByJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={() => handleNavigate(job)}
      style={styles.container}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkForImage(job.emoloyer_logo) ? job.emoloyer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearByJobCard;
