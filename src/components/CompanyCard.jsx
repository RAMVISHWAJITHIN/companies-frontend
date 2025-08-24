import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

const CompanyCard = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const navigate = useNavigate();

  // Fetch single company
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axiosInstance.get(`/${id}`);
        setCompany(res.data.data);
      } catch (err) {
        console.error("Error fetching company:", err);
      }
    };
    fetchCompany();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company?"
    );
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/${id}`);
      alert("Company deleted successfully");
      navigate("/");
    } catch (err) {
      console.error("Error deleting company:", err);
      alert("Failed to delete company");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-company/${id}`);
  };

  if (!company) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white shadow-lg rounded-xl">
        <img
          src={company.imageUrl}
          alt={company.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2 text-center">{company.name}</h1>
        <p className="text-gray-700 mb-2 text-center">
          Industry: {company.industry}
        </p>
        <p className="text-gray-600 mb-2">{company.description}</p>
        <p className="text-gray-500 mt-2 text-center">
          Location: {company.location.city}, {company.location.state},{" "}
          {company.location.country}
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
