# Install packages (run once)
install.packages("readr")
install.packages("dplyr")
install.packages("ggplot2")
install.packages("lubridate")

# Load libraries
library(readr)
library(dplyr)
library(ggplot2)
library(lubridate)

# Read dataset
data <- read_csv("Online Retail.csv")   # Change path if needed

# Convert InvoiceDate to Date-Time
data$InvoiceDate <- dmy_hm(data$InvoiceDate)

# Data Cleaning
data_clean <- data %>%
  filter(Quantity >= 1,
         UnitPrice > 0)

# Create Revenue column
data_clean <- data_clean %>%
  mutate(Revenue = Quantity * UnitPrice)

# Filter for year 2011
data_2011 <- data_clean %>%
  filter(year(InvoiceDate) == 2011)

# Monthly Revenue
monthly_revenue <- data_2011 %>%
  mutate(Month = format(InvoiceDate, "%b")) %>%
  group_by(Month) %>%
  summarise(TotalRevenue = sum(Revenue)) %>%
  mutate(Month = factor(
    Month,
    levels = c("Jan","Feb","Mar","Apr","May","Jun",
               "Jul","Aug","Sep","Oct","Nov","Dec")
  )) %>%
  arrange(Month)

# Line Chart
ggplot(monthly_revenue,
       aes(x = Month, y = TotalRevenue, group = 1)) +
  geom_line(color = "blue", linewidth = 1.2) +
  geom_point(color = "red", size = 3) +
  labs(
    title = "Monthly Revenue Trend (2011)",
    x = "Month",
    y = "Revenue"
  ) +
  theme_minimal()