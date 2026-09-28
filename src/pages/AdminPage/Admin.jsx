import "./Admin.css";
import WallpaperApi from "../../api/wallpaperApi";
import { useState } from "react";
import { toast } from "sonner";

export default function Admin() {
  const [formData, setFormData] = useState({
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("category", formData.category);
      data.append("image", formData.image);

      const res = await WallpaperApi.post( "/add-wallpaper",
        data
      );

      toast.success("🎉 Wallpaper added successfully!");

      console.log(res.data);

      setFormData({
        category: "",
        image: null,
      });

    } catch (err) {
      console.log(err);
      console.log(err.response);

      toast.error(
        err.response?.data?.message ||
          "Failed to add wallpaper."
      );
    }
  };

  return (
    <div className="Admin-page">
      <div className="AdminPage-cont">

        <div className="hu">
          <h1 className="admin-title">
            <div className="im">
              <img
                src="src/assets/Icon.png"
                alt="Logo"
                className="mx-auto h-14 w-auto"
              />
            </div>

            Admin Dashboard
          </h1>

          <p className="admin-subtitle">
            Add a new Wallpaper
          </p>
        </div>

        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              placeholder="Space, Nature, Cars..."
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Image</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Add Wallpaper
          </button>

        </form>
      </div>
    </div>
  );
}