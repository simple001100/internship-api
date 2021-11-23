import { store } from "./Store.js";

export const getPhones = async (req, res) => {
  res.json(store.phones);
};

export const getLaptops = async (req, res) => {
  res.json(`laptops`);
};

export const getSsds = async (req, res) => {
  res.json(`ssds`);
};

export const getProcessors = async (req, res) => {
  res.json(`processors`);
};

export const getVideocards = async (req, res) => {
  res.json(`video cardsd`);
};

export const getWatches = async (req, res) => {
  res.json(`watches`);
};
