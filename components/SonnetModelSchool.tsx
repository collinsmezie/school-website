'use client'

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Chip,
  Avatar,
  Rating,
  Divider,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  Badge
} from '@mui/material';
import {
  Menu as MenuIcon,
  School,
  Star,
  People,
  Event,
  Computer,
  Science,
  Palette,
  Sports,
  LocalLibrary,
  Phone,
  Email,
  LocationOn,
  PlayArrow,
  Close,
  Login,
  PersonAdd,
  Calendar,
  Announcement
} from '@mui/icons-material';

const SonnetModelSchool = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const heroSlides = [
    {
      title: "Nurturing Excellence, Inspiring Innovation",
      subtitle: "Where every student's potential becomes reality",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Start Your Journey"
    },
    {
      title: "Modern Learning, Timeless Values",
      subtitle: "Preparing students for tomorrow's challenges",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Explore Programs"
    },
    {
      title: "Innovation Meets Education",
      subtitle: "Technology-enhanced learning environments",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Virtual Tour"
    }
  ];

  const programs = [
    {
      title: "Elementary Program",
      description: "Foundational learning with creative exploration",
      icon: <School />,
      color: "#6366f1",
      features: ["Play-based Learning", "STEM Foundation", "Arts Integration", "Social Skills", "Cultural Heritage"]
    },
    {
      title: "High School Program",
      description: "Advanced academics preparing for university",
      icon: <LocalLibrary />,
      color: "#8b5cf6",
      features: ["AP Courses", "College Prep", "Career Guidance", "Leadership Development"]
    },
    {
      title: "STEAM Education",
      description: "Science, Technology, Engineering, Arts & Math",
      icon: <Science />,
      color: "#06b6d4",
      features: ["Robotics Lab", "Coding Classes", "Art Studio", "Innovation Hub", "Local Crafts"]
    },
    {
      title: "Sports & Athletics",
      description: "Physical development and team building",
      icon: <Sports />,
      color: "#10b981",
      features: ["Multiple Sports", "Professional Coaching", "State Competitions", "Fitness Programs"]
    }
  ];

  const faculty = [
    {
      name: "Dr. Aisha Adebayo",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "15 years",
      qualification: "Ph.D in Education"
    },
    {
      name: "Prof. Chukwudi Okonkwo",
      position: "Head of Sciences",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "12 years",
      qualification: "M.S in Physics"
    },
    {
      name: "Ms. Fatima Hassan",
      position: "Arts Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "10 years",
      qualification: "MFA in Fine Arts"
    },
    {
      name: "Coach Emmanuel Okechukwu",
      position: "Athletics Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "8 years",
      qualification: "B.S in Sports Science"
    }
  ];

  const news = [
    {
      title: "Science Fair Winners Announced",
      date: "March 15, 2025",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      excerpt: "Our students excel in regional science competition with innovative projects..."
    },
    {
      title: "New Computer Lab Opens",
      date: "March 10, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      excerpt: "State-of-the-art technology center now available for all students..."
    },
    {
      title: "Spring Arts Festival",
      date: "March 5, 2025",
      category: "Events",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      excerpt: "Join us for our annual celebration of student creativity and talent..."
    }
  ];

  const testimonials = [
    {
      name: "Mrs. Chioma Okechukwu",
      role: "Parent",
      rating: 5,
      comment: "Sonnet Model School has exceeded our expectations. My daughter loves going to school every day!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9e3ad39?ixlib=rb-4.0.3&w=100&h=100&fit=crop&auto=format&q=80"
    },
    {
      name: "Mr. Adebayo Hassan",
      role: "Alumni Parent",
      rating: 5,
      comment: "Both my children graduated from here and are now thriving in university. Excellent preparation!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&auto=format&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Preload hero images
  useEffect(() => {
    heroSlides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => console.log(`Hero image ${index + 1} loaded successfully:`, slide.image);
      img.onerror = () => console.log(`Hero image ${index + 1} failed to load:`, slide.image);
    });
  }, []);

  // Debug current slide
  useEffect(() => {
    console.log('Current slide:', currentSlide, 'Image URL:', heroSlides[currentSlide].image);
  }, [currentSlide]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  const menuItems = ['Home', 'About', 'Programs', 'Faculty', 'Admissions', 'News', 'Contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: '#6366f1' }}>
        Sonnet Model School
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button fullWidth sx={{ py: 1 }}>
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <AppBar position="fixed" sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            <School sx={{ mr: 1, verticalAlign: 'middle' }} />
            Sonnet Model School
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit" sx={{ 
                fontWeight: 500,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}>
                {item}
              </Button>
            ))}
            <Button 
              variant="contained" 
              sx={{ 
                ml: 2, 
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                '&:hover': { transform: 'translateY(-2px)' }
              }}
              startIcon={<Login />}
              onClick={() => setLoginOpen(true)}
            >
              Portal
            </Button>
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box sx={{ 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Primary background with image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroSlides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'all 0.8s ease-in-out',
            // Fallback background colors for each slide
            backgroundColor: currentSlide === 0 ? '#667eea' : 
                           currentSlide === 1 ? '#764ba2' : 
                           currentSlide === 2 ? '#06b6d4' : '#667eea'
          }}
        />
        

        
        {/* Content container */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {heroSlides[currentSlide].title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'white', 
              mb: 4, 
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            {heroSlides[currentSlide].subtitle}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }
              }}
              onClick={() => setAdmissionOpen(true)}
            >
              {heroSlides[currentSlide].cta}
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<PlayArrow />}
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { 
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)' 
                }
              }}
            >
              Virtual Tour
            </Button>
          </Box>
        </Container>
        
        {/* Slide indicators */}
        <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              sx={{
                display: 'inline-block',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                mx: 1,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#2d3748' }}>
          About Sonnet Model School
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: '#718096', maxWidth: '800px', mx: 'auto' }}>
          Established with a vision to provide world-class education, we combine academic excellence 
          with character development to shape tomorrow's leaders.
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                To provide innovative, comprehensive education that empowers students to excel academically, 
                develop critical thinking skills, and become responsible global citizens who contribute 
                meaningfully to society.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                To be recognized as a leading educational institution that nurtures creativity, fosters 
                innovation, and develops well-rounded individuals prepared for the challenges of the 21st century.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Grid container spacing={4}>
            {[
              { number: '500+', label: 'Students', color: '#667eea' },
              { number: '50+', label: 'Expert Faculty', color: '#764ba2' },
              { number: '15+', label: 'Years of Excellence', color: '#f093fb' },
              { number: '95%', label: 'College Acceptance', color: '#f5576c' }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: stat.color, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#718096' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Programs Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#2d3748' }}>
            Our Programs
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: '#718096', maxWidth: '600px', mx: 'auto' }}>
            Comprehensive educational programs designed to nurture every aspect of student development
          </Typography>
          
          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  transition: 'all 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-8px)', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      color: program.color
                    }}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: '50%', 
                        backgroundColor: `${program.color}20`,
                        mr: 2 
                      }}>
                        {program.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2d3748' }}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: '#718096', lineHeight: 1.7 }}>
                      {program.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {program.features.map((feature, idx) => (
                        <Chip 
                          key={idx} 
                          label={feature} 
                          sx={{ 
                            backgroundColor: `${program.color}15`,
                            color: program.color,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Faculty Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#2d3748' }}>
          Meet Our Faculty
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: '#718096', maxWidth: '600px', mx: 'auto' }}>
          Experienced educators dedicated to inspiring and guiding our students
        </Typography>
        
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {faculty.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s',
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)' 
                }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#2d3748' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#667eea', mb: 1, fontWeight: 500 }}>
                      {member.position}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#718096', mb: 1 }}>
                      {member.qualification}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a0aec0' }}>
                      {member.experience} Experience
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* News & Events */}
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
            Latest News & Events
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: 'rgba(255,255,255,0.8)', maxWidth: '600px', mx: 'auto' }}>
            Stay updated with the latest happenings at Sonnet Model School
          </Typography>
          
          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {news.map((article, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-5px)', 
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)' 
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.image}
                    alt={article.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Chip 
                        label={article.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: '#667eea',
                          color: 'white'
                        }}
                      />
                      <Typography variant="caption" sx={{ color: '#718096' }}>
                        {article.date}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2d3748' }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#718096' }}>
                      {article.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#2d3748' }}>
          What Parents Say
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: '#718096', maxWidth: '600px', mx: 'auto' }}>
          Hear from our community about their experience at Sonnet Model School
        </Typography>
        
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                border: '1px solid #e2e8f0'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    src={testimonial.avatar} 
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2d3748' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#718096' }}>
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly size="small" />
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{testimonial.comment}"
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)', py: 8, color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
            Get In Touch
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, opacity: 0.8 }}>
            We'd love to hear from you. Contact us today!
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOn sx={{ mr: 2, color: '#667eea' }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Visit Our Campus
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      15 Victoria Island Road, Lekki Phase 1, Lagos State, Nigeria
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: '#667eea' }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      +234 (0) 801-234-5678
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 2, color: '#667eea' }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Email Us
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      info@sonnetmodelschool.edu.ng
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'white' }}>
                  Quick Contact
                </Typography>
                <Box component="form" onSubmit={handleContactSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      py: 1.5,
                      '&:hover': { transform: 'translateY(-2px)' }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ background: '#1a202c', py: 4, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>
                Sonnet Model School
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Nurturing excellence and inspiring innovation in education.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" sx={{ color: '#667eea' }}>
                  <Phone />
                </IconButton>
                <IconButton size="small" sx={{ color: '#667eea' }}>
                  <Email />
                </IconButton>
                <IconButton size="small" sx={{ color: '#667eea' }}>
                  <LocationOn />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>
                Quick Links
              </Typography>
              <List dense>
                {['About Us', 'Programs', 'Admissions', 'News', 'Contact'].map((item) => (
                  <ListItem key={item} disablePadding>
                    <Button color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>
                School Hours
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                Monday - Friday: 7:30 AM - 3:00 PM
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                Saturday: 8:00 AM - 12:00 PM
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Sunday: Closed
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
            © 2025 Sonnet Model School. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Student Portal Login
            </Typography>
            <IconButton onClick={() => setLoginOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Student ID / Email"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                py: 1.5
              }}
            >
              Login
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Admission Dialog */}
      <Dialog open={admissionOpen} onClose={() => setAdmissionOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Start Your Journey
            </Typography>
            <IconButton onClick={() => setAdmissionOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3, color: '#718096' }}>
            Thank you for your interest in Sonnet Model School! Our admissions team will contact you within 24 hours.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<Phone />}
              sx={{
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)'
              }}
            >
              Call Admissions
            </Button>
            <Button
              variant="outlined"
              startIcon={<Email />}
              sx={{ borderColor: '#667eea', color: '#667eea' }}
            >
              Email Us
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAdmissionOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SonnetModelSchool;